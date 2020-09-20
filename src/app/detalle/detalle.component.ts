import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1234567891236, name: 'Andrea', weight: 'Morales', symbol: 45874521},
  {position: 7894561234587, name: 'Jose', weight: 'Garcia', symbol: 75314595},
  {position: 7896545874985, name: 'Alan', weight: 'Gonzales', symbol: 45786315},
  {position: 2486321148551, name: 'Gabriela', weight: 'Lopez', symbol: 453779},
  {position: 4451321898746, name: 'Esteban', weight: 'Giron', symbol: 45623155},
  /*{position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},*/
];

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','accion'];
  public dataSource;// = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
    this.cargarTabla();
  }

  cargarTabla(){
    this.dataSource=ELEMENT_DATA;
    return this.dataSource;
  }

}
