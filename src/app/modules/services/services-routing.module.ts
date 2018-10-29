import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { ServicePageComponent } from './pages/services-page/service-page.component';


const routes: Routes = [
  {
    path: '',
    component: ServicePageComponent,
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }


