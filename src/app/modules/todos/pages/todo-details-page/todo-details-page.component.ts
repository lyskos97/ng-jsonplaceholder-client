import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { IAsyncDataStatus } from 'src/app/utils/async-data-observable';
import { ITodo } from 'src/app/interfaces/models/todo';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-todo-details-page',
  templateUrl: './todo-details-page.component.html',
  styleUrls: ['./todo-details-page.component.css']
})
export class TodoDetailsPageComponent implements OnInit {
  todoId: string = this.route.snapshot.params['id'];
  todo: IAsyncDataStatus<ITodo>;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.todoService.getTodo(this.todoId).subscribe(todo => {
      this.todo = todo;

      if (this.todo.data) {
        this.titleService.setTitle(`TODO: "${todo.data.title}" JSONPlaceholder Client`);
      }
    });
  }
}
