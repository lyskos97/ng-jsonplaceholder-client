import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListPageComponent } from './pages/post-list-page/post-list-page.component';
import { PostDetailsPageComponent } from './pages/post-details-page/post-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: PostListPageComponent
  },
  {
    path: ':id',
    component: PostDetailsPageComponent
  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class PostsRoutingModule {}
