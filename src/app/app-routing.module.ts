import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'projects'
  },
  {
    path: 'about',
    loadChildren: "./modules/about/about.module#AboutModule"
  },
  {
    path: 'projects',
    loadChildren: "./modules/projects/projects.module#ProjectsModule"
  },
  {
    path: 'services',
    loadChildren: "./modules/services/services.module#ServicesModule"
  },
  {
    path: 'contacts',
    loadChildren: "./modules/contacts/contacts.module#ContactsModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
