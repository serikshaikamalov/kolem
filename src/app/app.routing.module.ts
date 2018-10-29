import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'kiosk'
  },
  {
    path: 'about',
    loadChildren: "./modules/about/about.module#AboutModule"
  },
  {
    path: 'projects',
    loadChildren: "./modules/projects/projects.module#ProjectsModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }