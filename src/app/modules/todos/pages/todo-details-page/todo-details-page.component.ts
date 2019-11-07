import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-details-page',
  templateUrl: './todo-details-page.component.html',
  styleUrls: ['./todo-details-page.component.css']
})
export class TodoDetailsPageComponent implements OnInit {
  todoId: string = this.route.snapshot.params['id'];
  todo$ = this.todoService.getTodo(this.todoId);

  constructor(private todoService: TodoService, private route: ActivatedRoute) {}

  ngOnInit() {}
}
