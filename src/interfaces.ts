export interface IPhoto {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IAction {
  type: string;
  payload?: any;
}