import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentListPageComponent } from './pages/comment-list-page/comment-list-page.component';
import { CommentDetailsPageComponent } from './pages/comment-details-page/comment-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: CommentListPageComponent
  },
  {
    path: ':id',
    component: CommentDetailsPageComponent
  }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class CommentsRoutingModule {}
