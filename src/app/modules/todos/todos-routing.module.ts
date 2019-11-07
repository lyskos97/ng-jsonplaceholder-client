import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListPageComponent } from './pages/todo-list-page/todo-list-page.component';
import { TodoDetailsPageComponent } from './pages/todo-details-page/todo-details-page.component';

const routes: Routes = [
  { path: '', component: TodoListPageComponent },
  { path: ':id', component: TodoDetailsPageComponent }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class TodosRoutingModule {}
