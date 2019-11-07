import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/models/user';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {
  users$ = this.userService.getUsers();

  TABLE_COLUMNS = ['id', 'name', 'email'];

  constructor(private userService: UserService, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Users - JSONPlaceholder client');
  }
}
