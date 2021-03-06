import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AboutIndexPageComponent } from './pages/about-index-page/about-index-page.component';

const routes: Routes = [
  {
    path: '',
    component: AboutIndexPageComponent
  }  
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }


