import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ShowListComponent } from './show-list/show-list.component';
import { ShowEditComponent } from './show-edit/show-edit.component';
import { ShowAddComponent } from './show-add/show-add.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShowListComponent,
    ShowEditComponent,
    ShowAddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
