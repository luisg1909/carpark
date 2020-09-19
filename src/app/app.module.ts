import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntradaComponent } from './entrada/entrada.component';
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


@NgModule({
  declarations: [
    AppComponent,
    EntradaComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
