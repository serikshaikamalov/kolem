import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ContactsIndexPageComponent } from './pages/contacts-page/contacts-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsIndexPageComponent
  }  
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }


