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
 
    if(a.length<1 || type.length<1)  {
      throw new Error('fallo')
       }
       
    Swal.fire({
      title: 'Mensaje!',
      text: a,
      icon:type,
      confirmButtonText: 'Cool'
    })
  }

  generarhora(a){

  if(a.length<1 )  {
    throw new Error('fallo')
     }
    this.hora=a
  }
  gethora(){

    return this.hora
  }
  get_domain() { 

    //  return "https://learn-287403.uc.r.appspot.com"
   return this.url

    
  }
  url="http://localhost:3000"
/*   getPosturl(name:string,form):any{
    if(name.length<1 || form==null)  {
      throw new Error('fallo')
       }
    return this.http.post(this.get_domain()+'/'+name,form)
} */
/* getPuturl(name:string,id:string,form):any{
  if(name.length<1 ||id.length<1  ||form==null)  {
    throw new Error('fallo')
     }
  return this.http.put(this.get_domain()+'/'+name+"/"+id,form)
} */
/* getdeleteur(name:string,id):any{
  if(name.length<1 ||id.length<1 )  {
    throw new Error('fallo')
     }
  return this.http.delete(this.get_domain()+'/'+name+"/"+id)
} */
/* getDataget(id:string){
  if(id.length<1 )  {
    throw new Error('fallo')
     }
  return this.http.get(this.get_domain()+'/vehiculos/'+id)
} */
/* getData(){
  return this.http.get(this.get_domain()+'/vehiculos/')
} */

//metodos asincronicos
async getPostDatapreg(id){
  return await  this.http.get(this.get_domain()+'/vehiculos'+'/'+id)
}
async getDataas(){
  return await  this.http.get(this.get_domain()+'/vehiculos/')
}


async getPosturlas(name:string,form){

  return await this.http.post(this.get_domain()+'/'+name,form)
}

async borrarasincrono(name:string,id){
  return await this.http.delete(this.get_domain()+'/'+name+"/"+id)
}

async editasincrono(name:string,id:string,form){
  return await this.http.put(this.get_domain()+'/'+name+"/"+id,form)
}
/*   getStuff() {
    let params = new HttpParams().append('testparam', 'testvalue')
    return this.http.get('./assets/mock/modules.json').toPromise().then(value => {
        return value
    })
} */


}
