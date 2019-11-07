import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ISearchParams } from '../interfaces/utility/pagination';
import { Observable } from 'rxjs';
import { ITodo } from '../interfaces/models/todo';
import { IUser } from '../interfaces/models/user';
import { switchMap, map } from 'rxjs/operators';

interface ITodoSearchParams extends ISearchParams {
  userId?: number | string;
}

interface ITodoWithUser extends ITodo {
  user: IUser;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private api: ApiService) {}

  getTodos(params?: ITodoSearchParams): Observable<ITodo[]> {
    return this.api.get<ITodo[]>(`/todos`, params);
  }

  getTodo(id: number | string): Observable<ITodoWithUser> {
    return this.api
      .get<ITodo>(`/todos/${id}`)
      .pipe(
        switchMap(todo =>
          this.api.get<IUser>(`/users/${id}`).pipe(map(user => ({ ...todo, user })))
        )
      );
  }
}
