import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ISearchParams } from '../interfaces/utility/pagination';
import { Observable } from 'rxjs';
import { ITodo } from '../interfaces/models/todo';

interface ITodoSearchParams extends ISearchParams {
  userId: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private api: ApiService) {}

  getTodos(params?: ITodoSearchParams): Observable<ITodo[]> {
    return this.api.get<ITodo[]>(`/todos`, params);
  }
}
