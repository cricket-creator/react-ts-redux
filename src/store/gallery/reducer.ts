import { IAction, IPhoto } from '../../interfaces';
import { actionTypes } from './action';

export const defaultState: IGalleryReducer = {
  loading: false,
  photos: [],
  error: null
};

export const galleryReducer = (state = defaultState, { type, payload }: IAction) => {
  switch (type) {
    case actionTypes.onload:
      return {
        ...state,
        loading: true
      };
    case actionTypes.loaded:
      return {
        ...state,
        loading: false,
        photos: [...state.photos, ...payload]
      };
    case actionTypes.failed:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return { ...state };
  }
};

export interface IGalleryReducer {
  loading: boolean;
  photos: IPhoto[];
  error: any;
}