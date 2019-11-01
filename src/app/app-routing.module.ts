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
      },
      {
        path: "posts",
        loadChildren: () =>
          import("./modules/posts/posts.module").then(mod => mod.PostsModule)
      },
      {
        path: "albums",
        loadChildren: () =>
          import("./modules/albums/albums.module").then(mod => mod.AlbumsModule)
      },
      {
        path: "todos",
        loadChildren: () =>
          import("./modules/todos/todos.module").then(mod => mod.TodosModule)
      },
      {
        path: "photos",
        loadChildren: () =>
          import("./modules/photos/photos.module").then(mod => mod.PhotosModule)
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
