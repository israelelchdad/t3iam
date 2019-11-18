import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './comps/panels/users/users.component';
import { UserComponent } from './comps/items/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { UserOptionsComponent } from './comps/panels/user-options/user-options.component';
import { TodosComponent } from './comps/panels/todos/todos.component';
import { PostsComponent } from './comps/panels/posts/posts.component';
import { AlbumsComponent } from './comps/panels/albums/albums.component';
import { TodoComponent } from './comps/items/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserOptionsComponent,
    TodosComponent,
    PostsComponent,
    AlbumsComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
