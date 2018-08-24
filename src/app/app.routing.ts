import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowListComponent } from './show-list/show-list.component';


const appRoutes: Routes = [
  {
    path: '',
    component: ShowListComponent
  }
]
