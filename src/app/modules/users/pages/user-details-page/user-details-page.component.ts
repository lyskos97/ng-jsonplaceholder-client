import { Component, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ActivatedRoute,
  Router
} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/models/user';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css']
})
export class UserDetailsPageComponent implements OnInit {
  userId: string;
  user: IUser;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.userId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.userService.getUser(+this.userId).subscribe(user => {
      this.user = user;
    });
  }

  get userJson() {
    if (this.user) {
      return JSON.stringify(this.user, null, 2);
    }

    return '';
  }
}
