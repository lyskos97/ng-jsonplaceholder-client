import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ISearchParams } from '../interfaces/utility/pagination';
import { IAlbum } from '../interfaces/models/album';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IUser } from '../interfaces/models/user';
import { asyncDataObservable, IAsyncDataStatus } from '../utils/async-data-observable';

interface IFilters extends ISearchParams {
  userId?: number | string;
}

interface IAlbumWithAuthor extends IAlbum {
  user: IUser;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  readonly TOTAL_ALBUMS = 100;

  constructor(private api: ApiService) {}

  getAlbums(params?: IFilters): Observable<IAsyncDataStatus<IAlbum[]>> {
    return asyncDataObservable(this.api.get<IAlbum[]>('/albums', params));
  }

  getAlbum(id: number | string): Observable<IAsyncDataStatus<IAlbumWithAuthor>> {
    return asyncDataObservable(
      this.api
        .get<IAlbum>(`/albums/${id}`)
        .pipe(
          switchMap(album =>
            this.api.get<IUser>(`/users/${album.userId}`).pipe(map(user => ({ ...album, user })))
          )
        )
    );
  }
}
