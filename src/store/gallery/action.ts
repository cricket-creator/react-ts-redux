import { IAction } from '../../interfaces';

export const actionTypes: IActionTypes = {
  fetch: 'GALLERY::FETCH',
  onload: 'GALLERY::ONLOAD',
  loaded: 'GALLERY::LOADED',
  failed: 'GALLERY::FAILED',
};

export const galleryFetch = (): IAction => ({ type: actionTypes.fetch });
export const galleryOnload = (): IAction => ({ type: actionTypes.onload });
export const galleryLoaded = (payload: any): IAction => ({ type: actionTypes.onload, payload });
export const galleryFailed = (payload: any): IAction => ({ type: actionTypes.failed, payload });

interface IActionTypes {
  fetch: string;
  onload: string;
  loaded: string;
  failed: string;
}