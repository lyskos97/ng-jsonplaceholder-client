import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ITodo } from 'src/app/interfaces/models/todo';
import { UserService } from 'src/app/services/user.service';
import { IAsyncDataStatus } from 'src/app/utils/async-data-observable';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.css']
})
export class TodoListPageComponent implements OnInit {
  todos: IAsyncDataStatus<ITodo[]>;

  constructor(private todoService: TodoService, private userService: UserService) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  get todosByUsers() {
    let userTodosMap = {};

    if (this.todos.data) {
      for (let todo of this.todos.data) {
        if (!userTodosMap[todo.userId]) {
          userTodosMap[todo.userId] = { expanded: false, items: [todo] };
        } else {
          userTodosMap[todo.userId].items.push(todo);
        }
      }
    }

    return userTodosMap;
  }
}
