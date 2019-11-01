import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", component: null },
  { path: ":id", component: null }
];

@NgModule({ imports: [RouterModule.forChild(routes)] })
export class UsersRoutingModule {}
