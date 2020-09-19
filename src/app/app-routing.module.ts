import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntradaComponent } from './entrada/entrada.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { BorrarvehiculoComponent } from './borrarvehiculo/borrarvehiculo.component';
import { EditarvehiculoComponent } from './editarvehiculo/editarvehiculo.component';

const routes: Routes = [
  {path: 'entrada', component: EntradaComponent},
  {path: '', component: EntradaComponent},
  {path: 'ingresov', component: VehiculosComponent},
  {path: 'editarv', component: EditarvehiculoComponent},
  {path: 'borrarv', component: BorrarvehiculoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
