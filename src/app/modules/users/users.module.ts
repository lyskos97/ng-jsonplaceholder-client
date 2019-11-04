import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import { UserDetailsPageComponent } from './pages/user-details-page/user-details-page.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserListPageComponent, UserDetailsPageComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule]
})
export class UsersModule {}
