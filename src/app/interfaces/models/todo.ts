import { IUser } from './user';

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  user?: IUser;
}
