import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ShowListComponent } from './show-list/show-list.component';
import { ShowEditComponent } from './show-edit/show-edit.component';
import { ShowAddComponent } from './show-add/show-add.component';
import { routing } from './app.routing';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { EventsComponent } from './events/events.component';
import { HistoryComponent } from './history/history.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShowListComponent,
    ShowEditComponent,
    ShowAddComponent,
    FooterComponent,
    AdminComponent,
    EventsComponent,
    HistoryComponent,
    MenuComponent,
    ContactComponent,
    HomeComponent,
    ShowDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
