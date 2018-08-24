import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowListComponent } from './show-list/show-list.component';
import { AdminComponent } from './admin/admin.component';
import { ShowAddComponent } from './show-add/show-add.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { HistoryComponent } from './history/history.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ShowListComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
