import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ISearchParams } from '../interfaces/utility/pagination';
import { IAlbum } from '../interfaces/models/album';
import { forkJoin } from 'rxjs';
import { mergeMap, merge, mergeMapTo, map } from 'rxjs/operators';
import { UserService } from './user.service';

interface IFilters extends ISearchParams {
  userId: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private api: ApiService, private userService: UserService) {}

  getAlbums(params?: IFilters) {
    return this.api.get<IAlbum[]>('/albums', params);
  }

  getAlbum(id: number | string) {
    return this.api.get<IAlbum>(`/albums/${id}`).pipe();
  }

  getAlbumWithUser(id: number | string) {
    return this.api.get<IAlbum>(`/albums/${id}`);
  }
}
