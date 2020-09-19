import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
 hora:string=""
  constructor() { }

  obtenerhora(){
    var date = new Date;
    
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();
    
    var year = date.getFullYear();
    var month = date.getMonth()+1; // beware: January = 0; February = 1, etc.
    var day = date.getDate();
    
    return year+"/"+month+"/"+day+" "+hour+":"+minutes+":"+seconds
  }

  message(a,type) {
 

    Swal.fire({
      title: 'Mensaje!',
      text: a,
      icon:type,
      confirmButtonText: 'Cool'
    })
  }

  generarhora(a){

    this.hora=a
  }
  gethora(){

    return this.hora
  }
}
