import { NgModule } from '@angular/core';

// External Modules
import { ServicesRoutingModule } from './services-routing.module';

/**
 * Pages
 */
import { ServicePageComponent } from './pages/services-page/service-page.component';



@NgModule({
  imports: [
    ServicesRoutingModule
  ],
  declarations: [
    ServicePageComponent
  ],
  providers: []
})
export class ServicesModule { }
