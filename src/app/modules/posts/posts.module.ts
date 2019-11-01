import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostDetailsPageComponent } from "./pages/post-details-page/post-details-page.component";
import { PostListPageComponent } from "./pages/post-list-page/post-list-page.component";

@NgModule({
  declarations: [PostDetailsPageComponent, PostListPageComponent],
  imports: [CommonModule]
})
export class PostsModule {}
