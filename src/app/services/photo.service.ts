import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ISearchParams } from '../interfaces/utility/pagination';
import { IPhoto } from '../interfaces/models/photo';

interface IParams extends ISearchParams {
  albumId: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private api: ApiService) {}

  getPhotos(params?: IParams) {
    return this.api.get<IPhoto[]>('/photos', params);
  }
}
