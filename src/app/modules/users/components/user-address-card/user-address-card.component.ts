import { Component, OnInit, Input } from '@angular/core';
import { IUserAddress } from 'src/app/interfaces/models/user';

@Component({
  selector: 'app-user-address-card',
  templateUrl: './user-address-card.component.html',
  styleUrls: ['./user-address-card.component.css']
})
export class UserAddressCardComponent implements OnInit {
  @Input() address: IUserAddress;

  constructor() {}

  ngOnInit() {}
}
