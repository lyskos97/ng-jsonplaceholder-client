import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {
  users$: Observable<IUser[]>;
  users: IUser[] = [];

  TABLE_COLUMNS = ['id', 'name', 'email'];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserList().subscribe(users => (this.users = users));
  }
}
