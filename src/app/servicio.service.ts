import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  message(a,type) {
 

    Swal.fire({
      title: 'Mensaje!',
      text: a,
      icon:type,
      confirmButtonText: 'Cool'
    })
  }


  get_domain() { 
    //  return "https://learn-287403.uc.r.appspot.com"
   return "http://localhost:3000"

  }

  /*NuevoUsuario(name,form){
    return this.http.post(this.get_domain()+'/'+name,form);
  }

  /*getUsuarios(){
    return this.http.get(this.get_domain()+'/'+'usuarios');
  }

  eliminarUsuario(id){
    return this.http.delete(this.get_domain()+'/'+'usuarios/'+id);
  }

  actualizarUsuario(id,form){
    return this.http.put(this.get_domain()+'/usuarios/'+id,form);
  }*/

  async getUsuarios(){
    return await this.http.get(this.get_domain()+'/'+'usuarios');
  }

  async eliminarUsuario(id){
    return await this.http.delete(this.get_domain()+'/'+'usuarios/'+id);
  }

  async actualizarUsuario(id,form){
    return await this.http.put(this.get_domain()+'/usuarios/'+id,form);
  }

  async NuevoUsuario(name,form){
    return await this.http.post(this.get_domain()+'/'+name,form);
  }


}
