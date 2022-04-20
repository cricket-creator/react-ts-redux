import { CategoryType, IAction } from '../../interfaces';
import { actionTypes } from './action';

export const defaultState: IGalleryReducer = {
  loading: false,
  categories: [],
  error: null
};

export const galleryReducer = (state = defaultState, { type, payload }: IAction) => {
  switch (type) {
    case actionTypes.onload:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.loaded:
      return {
        ...state,
        loading: false,
        categories: [...payload],
        error: null
      };
    case actionTypes.failed:
      return {
        ...state,
        loading: false,
        categories: [],
        error: payload
      };
    default:
      return state;
  }
};

export interface IGalleryReducer {
  loading: boolean;
  categories: CategoryType[] | [];
  error: string | null;
}