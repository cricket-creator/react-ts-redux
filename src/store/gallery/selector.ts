import { IRootReducer } from '../index';
import { CategoryType } from '../../interfaces';

export const selectLoading = (state: IRootReducer): boolean => state.gallery.loading;
export const selectCategories = (state: IRootReducer): CategoryType[] => state.gallery.categories;
export const selectError = (state: IRootReducer): string | null => state.gallery.error;