import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { IAlbum } from 'src/app/interfaces/models/album';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/models/user';

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

  constructor(
    private userService: UserService,
    private albumService: AlbumService,
    private route: ActivatedRoute
  ) {
    this.albumId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.albumService.getAlbum(this.albumId).subscribe(album => {
      this.album = album;

      this.userService.getUser(album.userId).subscribe(user => {
        this.album.user = user;
      });
    });
  }
}
