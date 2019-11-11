import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { IAlbum } from 'src/app/interfaces/models/album';
import { Title } from '@angular/platform-browser';
import { IAsyncDataStatus } from 'src/app/utils/async-data-observable';

@Component({
  selector: 'app-album-list-page',
  templateUrl: './album-list-page.component.html',
  styleUrls: ['./album-list-page.component.css']
})
export class AlbumListPageComponent implements OnInit {
  PAGE_SIZE = 15;
  albums: IAsyncDataStatus<IAlbum[]> = {
    data: [],
    error: null,
    loading: false
  };
  page: number = 1;

  constructor(private albumService: AlbumService, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Albums - JSONPlaceholder Client');

    this.loadPageAndAppend();
  }

  loadPageAndAppend() {
    this.albumService.getAlbums({ _limit: this.PAGE_SIZE, _page: this.page }).subscribe(albums => {
      this.albums = { ...albums, data: [...this.albums.data, ...(albums.data || [])] };
    });
  }

  get totalPages() {
    return Math.ceil(this.albumService.TOTAL_ALBUMS / this.PAGE_SIZE);
  }

  get hasNextPage() {
    return this.page < this.totalPages;
  }
}
