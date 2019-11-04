import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ISearchParams } from '../interfaces/utility/pagination';
import { IAlbum } from '../interfaces/models/album';

interface IFilters extends ISearchParams {
  userId: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private api: ApiService) {}

  getAlbums(params?: IFilters) {
    return this.api.get<IAlbum[]>('/albums', params);
  }
}
