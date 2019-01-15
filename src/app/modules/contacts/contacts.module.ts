import { NgModule } from '@angular/core';

// External Modules
import { ContactsRoutingModule } from './contacts-routing.module';

// Pages
import { ContactsIndexPageComponent } from './pages/contacts-page/contacts-page.component';

/**
 * Services
 */
import { ContactService } from './services/contact.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    ContactsRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ContactsIndexPageComponent
  ],
  providers: [
      ContactService
  ]
})
export class ContactsModule { }
