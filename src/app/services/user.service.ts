import { Injectable } from '@angular/core';
import { ISearchParams } from '../interfaces/utility/pagination';
import { IUser } from '../interfaces/models/user';
import { ApiService } from './api.service';
import { asyncDataObservable } from '../utils/async-data-observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private api: ApiService) {}

  getUsers(params?: ISearchParams) {
    return this.api.get<IUser[]>('/users', params);
  }

  getUser(id: number | string) {
    return asyncDataObservable(this.api.get<IUser>(`/users/${id}`));
  }
}
