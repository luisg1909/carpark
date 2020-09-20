import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntradaComponent } from './entrada/entrada.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroComponent } from './registro/registro.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatCardModule,
  MatTableModule,
 MatCardTitle,
 MatCardHeader

} from "@angular/material";
import { DetalleComponent } from './detalle/detalle.component';
import {HttpClientModule} from '@angular/common/http';

=======
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { FormsModule } from '@angular/forms';
import { EditarvehiculoComponent } from './editarvehiculo/editarvehiculo.component';
import { BorrarvehiculoComponent } from './borrarvehiculo/borrarvehiculo.component';
import {HttpClientModule} from '@angular/common/http';
>>>>>>> 85d466b159216c91aa7877827afe457fe1a458bb

@NgModule({
  declarations: [
    AppComponent,
    EntradaComponent,
<<<<<<< HEAD
    RegistroComponent,
    DetalleComponent
=======
    VehiculosComponent,
    EditarvehiculoComponent,
    BorrarvehiculoComponent
>>>>>>> 85d466b159216c91aa7877827afe457fe1a458bb
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
=======
    MatButtonModule,
    FormsModule,
    HttpClientModule

>>>>>>> 85d466b159216c91aa7877827afe457fe1a458bb
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
