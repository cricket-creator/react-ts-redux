import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';

import { galleryReducer, IGalleryReducer } from './gallery/reducer';
import { galleryWatcher } from './gallery/saga';

const sagaMiddleware = createSagaMiddleware();
const devEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

const rootReducer = combineReducers({
  gallery: galleryReducer
});

export const store = createStore(
  rootReducer,
  devEnhancers || applyMiddleware(sagaMiddleware)
);

function* rootWatcher() {
  yield all([
    galleryWatcher()
  ]);
}

sagaMiddleware.run(rootWatcher);

export interface IRootReducer {
  gallery: IGalleryReducer
}