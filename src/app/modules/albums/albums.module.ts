import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlbumListPageComponent } from "./pages/album-list-page/album-list-page.component";
import { AlbumDetailsPageComponent } from "./pages/album-details-page/album-details-page.component";

@NgModule({
  declarations: [AlbumListPageComponent, AlbumDetailsPageComponent],
  imports: [CommonModule]
})
export class AlbumsModule {}
