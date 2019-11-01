import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlbumListPageComponent } from "./pages/album-list-page/album-list-page.component";
import { AlbumDetailsPageComponent } from "./pages/album-details-page/album-details-page.component";

const routes: Routes = [
  { path: "", component: AlbumListPageComponent },
  { path: ":id", component: AlbumDetailsPageComponent }
];

@NgModule({ imports: [RouterModule.forChild(routes)] })
export class AlbumsRoutingModule {}
