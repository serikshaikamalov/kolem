import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { ProjectListPageComponent } from './pages/project-list-page/project-list-page.component';
import { ProjectDetailsPageComponent } from './pages/project-detail-page/project-details-page.component';


const routes: Routes = [
  {
    path: '',
    component: ProjectListPageComponent,
  },
  {
    path: 'details/:id',
    component: ProjectDetailsPageComponent,
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }


