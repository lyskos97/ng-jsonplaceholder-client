import { IUser } from './user';

export interface IAlbum {
  userId: number;
  id: number;
  title: string;
  user?: IUser;
}
