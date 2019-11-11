import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { AlbumService } from 'src/app/services/album.service';
import { Observable } from 'rxjs';
import { IAlbum } from 'src/app/interfaces/models/album';
import { IUser } from 'src/app/interfaces/models/user';
import { Title } from '@angular/platform-browser';
import { IPhoto } from 'src/app/interfaces/models/photo';

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
  PAGE_SIZE = 10;
  page: number = 1;
  photos: IPhoto[] = [];

  constructor(
    private photoService: PhotoService,
    private albumService: AlbumService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Photos - JSONPlaceholder Client');

    this.loadPageAndAppend();
  }

  loadPageAndAppend() {
    this.photoService.getPhotos({ _limit: this.PAGE_SIZE, _page: this.page }).subscribe(photos => {
      this.photos.push(...photos);
    });
  }

  get totalPages() {
    return Math.ceil(this.albumService.TOTAL_ALBUMS / this.PAGE_SIZE);
  }

  get hasNextPage() {
    return this.page < this.totalPages;
  }
}
