import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { IAlbum } from 'src/app/interfaces/models/album';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-album-list-page',
  templateUrl: './album-list-page.component.html',
  styleUrls: ['./album-list-page.component.css']
})
export class AlbumListPageComponent implements OnInit {
  albums: IAlbum[] = [];

  constructor(private albumService: AlbumService, private titleService: Title) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe(albums => {
      this.albums = albums;
    });

    this.titleService.setTitle('Albums - JSONPlaceholder Client');
  }
}
