import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ISearchParams } from '../interfaces/utility/pagination';
import { IAlbum } from '../interfaces/models/album';
import { Observable, of, from } from 'rxjs';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { IUser } from '../interfaces/models/user';

interface IFilters extends ISearchParams {
  userId: number | string;
}

interface IAlbumWithAuthor extends IAlbum {
  user: IUser;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private api: ApiService, private userService: UserService) {}

  getAlbums(params?: IFilters) {
    return this.api.get<IAlbum[]>('/albums', params);
  }

  getAlbum(id: number | string): Observable<IAlbumWithAuthor> {
    return this.api
      .get<IAlbum>(`/albums/${id}`)
      .pipe(
        switchMap(album =>
          this.userService
            .getUser(album.userId)
            .pipe(map(user => ({ ...album, user })))
        )
      );
  }
}
