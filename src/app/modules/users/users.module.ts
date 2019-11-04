import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import { UserDetailsPageComponent } from './pages/user-details-page/user-details-page.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserAddressCardComponent } from './components/user-address-card/user-address-card.component';
import { UserCompanyCardComponent } from './components/user-company-card/user-company-card.component';

@NgModule({
  declarations: [
    UserListPageComponent,
    UserDetailsPageComponent,
    UserAddressCardComponent,
    UserCompanyCardComponent
  ],
  imports: [CommonModule, UsersRoutingModule, SharedModule]
})
export class UsersModule {}
