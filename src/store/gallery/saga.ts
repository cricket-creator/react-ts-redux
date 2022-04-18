import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { actionTypes, galleryFailed, galleryLoaded, galleryOnload } from './action';
import { IPhoto } from '../../interfaces';

const API = 'https://jsonplaceholder.typicode.com/photos';
// Synthetic delay
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

async function fetchPhotosFromApi(url: string) {
  try {
    return await axios.get(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        _limit: 24
      }
    }).then(res => res.data);
  } catch (e: any) {
    return e;
  }
}

function* fetchPhotosWorker() {
  yield put(galleryOnload());
  yield call(delay, 2000);

  const data: IPhoto[] | Error = yield call(fetchPhotosFromApi, API);

  if (data instanceof Error) {
    yield put(galleryFailed(data.message));
  } else {
    yield put(galleryLoaded(data));
  }
}

export function* galleryWatcher() {
  yield takeEvery(actionTypes.fetch, fetchPhotosWorker);
}