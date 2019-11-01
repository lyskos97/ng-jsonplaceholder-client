import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListPageComponent } from "./pages/user-list-page/user-list-page.component";
import { UserDetailsPageComponent } from "./pages/user-details-page/user-details-page.component";

const routes: Routes = [
  { path: "", component: UserListPageComponent },
  { path: ":id", component: UserDetailsPageComponent }
];

@NgModule({ imports: [RouterModule.forChild(routes)] })
export class UsersRoutingModule {}
