import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import { UserDetailsPageComponent } from './pages/user-details-page/user-details-page.component';
import { UsersRoutingModule } from './users-routing.module';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [UserListPageComponent, UserDetailsPageComponent],
  imports: [CommonModule, UsersRoutingModule, MatTableModule]
})
export class UsersModule {}
