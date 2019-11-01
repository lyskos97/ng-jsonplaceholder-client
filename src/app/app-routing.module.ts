import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./components/layout/layout.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";

const appRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", component: HomePageComponent },
      {
        path: "users",
        loadChildren: () =>
          import("./modules/users/users.module").then(mod => mod.UsersModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: "enabled" })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
