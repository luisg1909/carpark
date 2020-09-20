import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { EntradaComponent } from './entrada/entrada.component';
<<<<<<< HEAD
import { RegistroComponent } from './registro/registro.component';
=======
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { BorrarvehiculoComponent } from './borrarvehiculo/borrarvehiculo.component';
import { EditarvehiculoComponent } from './editarvehiculo/editarvehiculo.component';
>>>>>>> 85d466b159216c91aa7877827afe457fe1a458bb

const routes: Routes = [
  {path: 'entrada', component: EntradaComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'detalle', component: DetalleComponent},
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
