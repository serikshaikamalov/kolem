import { NgModule } from '@angular/core';

// External Modules
import { ContactsRoutingModule } from './contacts-routing.module';

// Pages
import { ContactsIndexPageComponent } from './pages/contacts-page/contacts-page.component';


@NgModule({
  imports: [
    ContactsRoutingModule
  ],
  declarations: [
    ContactsIndexPageComponent
  ],
  providers: []
})
export class ContactsModule { }
