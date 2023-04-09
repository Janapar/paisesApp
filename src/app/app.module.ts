import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';
import {  AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ //hay que importar todos los modulos de cada paquete que hemos creado
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaisModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
