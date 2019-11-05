import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListPageComponent } from './pages/photo-list-page/photo-list-page.component';
import { PhotoDetailsPageComponent } from './pages/photo-details-page/photo-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: PhotoListPageComponent
  },
  {
    path: ':id',
    component: PhotoDetailsPageComponent
  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class PhotosRoutingModule {}
