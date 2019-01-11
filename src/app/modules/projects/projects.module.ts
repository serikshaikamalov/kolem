import { NgModule } from '@angular/core';

// External Modules
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListPageComponent } from './pages/project-list-page/project-list-page.component';
import { ProjectDetailsPageComponent } from './pages/project-detail-page/project-details-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/**
 * SERVICES
 */
import { ProjectsService } from './services/kolem.service';


@NgModule({
  imports: [
    ProjectsRoutingModule,
    CommonModule
  ],
  declarations: [
    ProjectListPageComponent,
    ProjectDetailsPageComponent
  ],
  providers: [
      ProjectsService
  ]
})
export class ProjectsModule { }
