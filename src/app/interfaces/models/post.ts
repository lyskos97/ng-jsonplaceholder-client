import { IUser } from './user';
import { IComment } from './comment';

export interface IPost {
  userId: number;
  id: 1;
  title: string;
  body: string;
  author?: IUser;
  comments?: IComment[];
}
