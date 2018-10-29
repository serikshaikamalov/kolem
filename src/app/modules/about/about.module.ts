import { NgModule } from '@angular/core';

// External Modules
import { AboutRoutingModule } from './about-routing.module';

// Pages
import { AboutIndexPageComponent } from './pages/about-index-page/about-index-page.component';


@NgModule({
  imports: [
    AboutRoutingModule
  ],
  declarations: [
    AboutIndexPageComponent
  ],
  providers: []
})
export class AboutModule { }
