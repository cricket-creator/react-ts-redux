import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { actionTypes, galleryFailed, galleryLoaded, galleryOnload } from './action';

const API = 'https://jsonplaceholder.typicode.com/photos';

async function fetchPhotosFromApi() {
  try {
    return await axios.get(API, {
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

function* fetchPhotosWorker(): Generator<any, any, any> {
  yield put(galleryOnload());
  try {
    const data = yield call(fetchPhotosFromApi);
    yield put(galleryLoaded(data));
  } catch (e) {
    yield put(galleryFailed(e));
  }
}

export function* galleryWatcher() {
  yield takeEvery(actionTypes.fetch, fetchPhotosWorker);
}