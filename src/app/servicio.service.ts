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

  NuevoUsuario(name,form){
    return this.http.post(this.get_domain()+'/'+name,form);
  }


}
