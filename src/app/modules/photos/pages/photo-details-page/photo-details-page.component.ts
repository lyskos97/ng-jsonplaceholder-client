import { Component, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/interfaces/models/photo';
import { PhotoService } from 'src/app/services/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photo-details-page',
  templateUrl: './photo-details-page.component.html',
  styleUrls: ['./photo-details-page.component.css']
})
export class PhotoDetailsPageComponent implements OnInit {
  photoId = this.route.snapshot.params['id'];
  photo$: Observable<IPhoto> = this.photoService.getPhoto(this.photoId);

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}
}
