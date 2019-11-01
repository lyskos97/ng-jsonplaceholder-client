import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoListPageComponent } from "./pages/todo-list-page/todo-list-page.component";
import { TodoDetailsPageComponent } from "./pages/todo-details-page/todo-details-page.component";

@NgModule({
  declarations: [TodoListPageComponent, TodoDetailsPageComponent],
  imports: [CommonModule]
})
export class TodosModule {}
