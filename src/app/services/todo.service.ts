import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ISearchParams } from '../interfaces/utility/pagination';
import { Observable } from 'rxjs';
import { ITodo } from '../interfaces/models/todo';
import { IUser } from '../interfaces/models/user';
import { switchMap, map } from 'rxjs/operators';
import { IAsyncDataStatus, asyncDataObservable } from '../utils/async-data-observable';

interface ITodoSearchParams extends ISearchParams {
  userId?: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private api: ApiService) {}

  getTodos(params?: ITodoSearchParams): Observable<ITodo[]> {
    return this.api.get<ITodo[]>(`/todos`, params);
  }

  getTodo(id: number | string): Observable<IAsyncDataStatus<ITodo>> {
    return asyncDataObservable(
      this.api
        .get<ITodo>(`/todos/${id}`)
        .pipe(
          switchMap(todo =>
            this.api.get<IUser>(`/users/${todo.userId}`).pipe(map(user => ({ ...todo, user })))
          )
        )
    );
  }
}
