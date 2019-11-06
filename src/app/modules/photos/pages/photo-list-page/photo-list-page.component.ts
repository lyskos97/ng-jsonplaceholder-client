import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { AlbumService } from 'src/app/services/album.service';
import { Observable } from 'rxjs';
import { IAlbum } from 'src/app/interfaces/models/album';
import { IUser } from 'src/app/interfaces/models/user';

interface IAlbumWithUser extends IAlbum {
  user: IUser;
}

interface IAlbumsInfo {
  [key: string]: Observable<IAlbumWithUser>;
}

@Component({
  selector: 'app-photo-list-page',
  templateUrl: './photo-list-page.component.html',
  styleUrls: ['./photo-list-page.component.css']
})
export class PhotoListPageComponent implements OnInit {
  photos$ = this.photoService.getPhotos({ _limit: 40, _page: 1 });
  albumsInfo$: IAlbumsInfo = {};

  constructor(private photoService: PhotoService, private albumService: AlbumService) {}

  ngOnInit() {
    this.photos$.subscribe(photos => {
      for (let photo of photos) {
        this.albumsInfo$[photo.id] = this.albumService.getAlbum(photo.id);
      }
    });
  }

  loadAlbum(id: number) {
    return this.albumService.getAlbum(id);
  }
}
