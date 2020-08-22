import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import{BrowserAnimationsModule} from'@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { UsersDBComponent } from './users-db/users-db.component';
import { UserDBComponent } from './UsersDB/user-db/user-db.component';
import { UserDBListComponent } from './UsersDB/user-db-list/user-db-list.component';
import {UserDBService} from './shared/user-db.Service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    UsersDBComponent,
    UserDBComponent,
    UserDBListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [UserDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
