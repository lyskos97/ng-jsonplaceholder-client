import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { IAlbum } from 'src/app/interfaces/models/album';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/models/user';
import { IPhoto } from 'src/app/interfaces/models/photo';
import { PhotoService } from 'src/app/services/photo.service';

interface AlbumWithUser extends IAlbum {
  user?: IUser;
}

@Component({
  selector: 'app-album-details-page',
  templateUrl: './album-details-page.component.html',
  styleUrls: ['./album-details-page.component.css']
})
export class AlbumDetailsPageComponent implements OnInit {
  albumId: string;
  album: AlbumWithUser;
  photos: IPhoto[] = [];

  constructor(
    private photoService: PhotoService,
    private albumService: AlbumService,
    private route: ActivatedRoute
  ) {
    this.albumId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.loadAlbum();
    this.loadPhotos();
  }

  loadPhotos() {
    this.photoService.getPhotos({ albumId: this.albumId }).subscribe(photos => {
      this.photos = photos;
    });
  }

  loadAlbum() {
    this.albumService.getAlbumWithUser(this.albumId).subscribe(album => {
      this.album = album;
    });
  }
}
