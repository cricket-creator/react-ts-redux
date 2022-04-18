import { IRootReducer } from '../index';
import { IPhoto } from '../../interfaces';

export const selectLoading = (state: IRootReducer): boolean => state.gallery.loading;
export const selectPhotos = (state: IRootReducer): IPhoto[] => state.gallery.photos;
export const selectError = (state: IRootReducer): string | null => state.gallery.error;