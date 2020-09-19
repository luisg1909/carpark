import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntradaComponent } from './entrada/entrada.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { FormsModule } from '@angular/forms';
import { EditarvehiculoComponent } from './editarvehiculo/editarvehiculo.component';
import { BorrarvehiculoComponent } from './borrarvehiculo/borrarvehiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    EntradaComponent,
    VehiculosComponent,
    EditarvehiculoComponent,
    BorrarvehiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
