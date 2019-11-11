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
  PAGE_SIZE = 25;
  albums: IAlbum[] = [];
  page: number = 1;

  constructor(private albumService: AlbumService, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Albums - JSONPlaceholder Client');

    this.loadAlbumPage(this.page);
  }

  loadAlbumPage(page: number) {
    this.albumService.getAlbums({ _limit: this.PAGE_SIZE, _page: page }).subscribe(albums => {
      this.albums = [...this.albums, ...albums];
    });
  }

  loadNextPageAndAppend() {
    this.page += 1;

    this.loadAlbumPage(this.page);
  }

  get totalPages() {
    return Math.ceil(this.albumService.TOTAL_ALBUMS / this.PAGE_SIZE);
  }

  get hasNextPage() {
    return this.page < this.totalPages;
  }
}
