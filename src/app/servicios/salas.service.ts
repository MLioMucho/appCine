import { Injectable } from '@angular/core';
import { Sala } from '../modelos/sala';

@Injectable()
export class SalasService {

  salas: any =[
    {
      idSala: 1,
      filas: 5,
      columnas: 6,
      nombre: 'Sala 1'
    },
    {
      idSala: 2,
      filas: 7,
      columnas: 8,
      nombre: 'Sala 2'
    }
  ]

  constructor() { }

  getSala(){
    return this.salas;
  }
  setSala(sala:Sala){
    this.salas.push(sala);
  }
  ultimaSala(){
    return this.salas[this.salas.length-1].idSala+1;
  }
  borrarSala(i:number){
    this.salas.splice(i,1);
  }
}
