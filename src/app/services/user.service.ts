import { Injectable } from '@angular/core';
import { ISearchParams } from '../interfaces/utility/pagination';
import { IUser } from '../interfaces/models/user';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private api: ApiService) {}

  getUserList(params?: ISearchParams) {
    return this.api.get<IUser[]>('/users', { params });
  }

  getUser(id: number) {
    return this.api.get<IUser>(`/users/${id}`);
  }
}
