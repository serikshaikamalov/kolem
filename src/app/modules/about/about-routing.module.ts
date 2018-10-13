import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
// import { AboutComponent } from './components/about/about.component';
// import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    //component: AboutComponent
  }  
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }


