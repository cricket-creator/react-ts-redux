import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { galleryReducer, IGalleryReducer } from './gallery/reducer';
import { galleryWatcher } from './gallery/saga';

const sagaMiddleware = createSagaMiddleware();
const devEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

const rootReducer = combineReducers({ gallery: galleryReducer });
// Redux-persist
const persistConfig = {
  key: 'gallery',
  blacklist: [],
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  devEnhancers || applyMiddleware(sagaMiddleware)
);

export const persistedStore = persistStore(store);

function* rootWatcher() {
  yield all([
    galleryWatcher()
  ]);
}

sagaMiddleware.run(rootWatcher);

export interface IRootReducer {
  gallery: IGalleryReducer;
}