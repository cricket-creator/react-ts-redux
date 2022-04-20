export interface IPhoto {
  id: number;
  title: string;
  url: string;
  thumbnailUrl?: string;
  albumId?: number;
  category?: number;
}

export type CategoryType = [number, IPhoto[]];

export interface IAction {
  type: string;
  payload?: any;
}

export interface IAxiosConfig {
  params: {
    [key: string]: string | number
  };
  headers: {
    [key: string]: string | number
  };
}