import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhotoDetailsPageComponent } from "./pages/photo-details-page/photo-details-page.component";
import { PhotoListPageComponent } from './pages/photo-list-page/photo-list-page.component';
import { PhotosRoutingModule } from './photos-routing.module';

@NgModule({
  declarations: [PhotoDetailsPageComponent, PhotoListPageComponent],
  imports: [CommonModule, PhotosRoutingModule]
})
export class PhotosModule {}
