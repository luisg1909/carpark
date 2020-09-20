import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
 hora:string=""
  constructor(private http: HttpClient) { }

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
  get_domain() { 

    //  return "https://learn-287403.uc.r.appspot.com"
   return "http://localhost:3000"

    
  }

  getPosturl(name,form):any{
    return this.http.post(this.get_domain()+'/'+name,form)
}
getPuturl(name,id,form):any{
  return this.http.put(this.get_domain()+'/'+name+"/"+id,form)
}
getdeleteur(name,id):any{
  return this.http.delete(this.get_domain()+'/'+name+"/"+id)
}
getDataget(id){
  return this.http.get(this.get_domain()+'/vehiculos/'+id)
}
getData(){
  return this.http.get(this.get_domain()+'/vehiculos/')
}
  getStuff() {
    let params = new HttpParams().append('testparam', 'testvalue')
    return this.http.get('./assets/mock/modules.json').toPromise().then(value => {
        return value
    })
}


}
