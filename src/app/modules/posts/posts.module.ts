import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsPageComponent } from './pages/post-details-page/post-details-page.component';
import { PostListPageComponent } from './pages/post-list-page/post-list-page.component';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PostDetailsPageComponent, PostListPageComponent],
  imports: [CommonModule, PostsRoutingModule, SharedModule]
})
export class PostsModule {}
