import { Component, OnInit, Input } from '@angular/core';
import { IUserCompany } from 'src/app/interfaces/models/user';

@Component({
  selector: 'app-user-company-card',
  templateUrl: './user-company-card.component.html',
  styleUrls: ['./user-company-card.component.css']
})
export class UserCompanyCardComponent implements OnInit {
  @Input() company: IUserCompany;

  constructor() {}

  ngOnInit() {}
}
