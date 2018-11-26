import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';

import { AppModule } from './app.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';


@NgModule({
    imports: [
        AppModule,
        BrowserModule.withServerTransition({ appId: 'ssr-example' }),
        ServerModule,
        ModuleMapLoaderModule
    ],
    bootstrap: [AppComponent]
})
export class ServerAppModule { }