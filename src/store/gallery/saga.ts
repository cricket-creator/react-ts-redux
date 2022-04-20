import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { actionTypes, galleryFailed, galleryLoaded, galleryOnload } from './action';
import { IPhoto, IAxiosConfig } from '../../interfaces';
import { photoProperties } from '../../enum';

const API = 'https://jsonplaceholder.typicode.com/photos';
const config: IAxiosConfig = {
  headers: { 'Content-Type': 'application/json' },
  params: { _limit: 24 }
};
// Synthetic delay
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

async function fetchPhotosFromApi(url: string, config?: IAxiosConfig): Promise<any> {
  try {
    let data: IPhoto[] = await axios.get(url, config)
      .then(res => res.data);

    const amountInCategories = data.length / 4;
    let category = 1;

    data = data.map((datum: IPhoto, idx: number) => {
      for (const key in datum) {
        if (key === photoProperties.thumbnailUrl || key === photoProperties.albumId) {
          delete datum[key];
        }
      }

      if ((idx + 1) % amountInCategories === 0) {
        return { ...datum, category: category++ };
      }

      return { ...datum, category };
    });

    const photosMap = new Map();

    for (const datum of data) {
      if (!photosMap.has(datum.category)) {
        photosMap.set(datum.category, [datum]);
      } else {
        const data = photosMap.get(datum.category!);
        photosMap.set(datum.category, [...data, datum]);
      }
    }

    return photosMap;
  } catch (e: any) {
    return e;
  }
}

function* fetchPhotosWorker() {
  yield put(galleryOnload());
  yield call(delay, 2000);

  const data: IPhoto[] | Error = yield call(fetchPhotosFromApi, API, config);

  if (data instanceof Error) {
    yield put(galleryFailed(data.message));
  } else {
    yield put(galleryLoaded(data));
  }
}

export function* galleryWatcher() {
  yield takeEvery(actionTypes.fetch, fetchPhotosWorker);
}