import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { EntradaComponent } from './entrada/entrada.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: 'entrada', component: EntradaComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'detalle', component: DetalleComponent},
  {path: '', component: EntradaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
