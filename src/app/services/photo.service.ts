import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ISearchParams } from '../interfaces/utility/pagination';
import { IPhoto } from '../interfaces/models/photo';
import { switchMap, map } from 'rxjs/operators';
import { IAlbum } from '../interfaces/models/album';
import { IUser } from '../interfaces/models/user';
import { Observable } from 'rxjs';

interface IParams extends ISearchParams {
  albumId?: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private api: ApiService) {}

  getPhotos(params?: IParams) {
    return this.api.get<IPhoto[]>('/photos', params);
  }

  getPhoto(id: number | string): Observable<IPhoto> {
    return this.api
      .get<IPhoto>(`/photos/${id}`)
      .pipe(
        switchMap(photo =>
          this.api.get<IAlbum>(`/albums/${photo.albumId}`).pipe(map(album => ({ ...photo, album })))
        )
      );
  }
}
