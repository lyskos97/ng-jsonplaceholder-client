import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommentDetailsPageComponent } from "./pages/comment-details-page/comment-details-page.component";
import { CommentListPageComponent } from "./pages/comment-list-page/comment-list-page.component";
import { CommentsRoutingModule } from "./comments-routing.module";

@NgModule({
  declarations: [CommentDetailsPageComponent, CommentListPageComponent],
  imports: [CommonModule, CommentsRoutingModule]
})
export class CommentsModule {}
