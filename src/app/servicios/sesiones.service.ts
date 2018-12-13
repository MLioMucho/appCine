import { Injectable } from '@angular/core';
import { Proyeccion } from '../modelos/proyeccion';

@Injectable()
export class SesionesService {

  sesiones: any =[
    {
      idSala: 1,
      idPeli: 1,
      inicio: '11/12/2018',
      fin: '12/12/2018',
      precio: 6,
      hora: '23:00'
    },
    {
      idSala: 2,
      idPeli: 1,
      inicio: '12/12/2018',
      fin: '14/12/2018',
      precio: 6,
      hora: '23:00'
    },
    {
      idSala: 1,
      idPeli: 1,
      inicio: '11/12/2018',
      fin: '12/12/2018',
      precio: 6,
      hora: '11:00'
    }
  ]
  
  constructor() { }

  getSesion(){
    return this.sesiones;
  }
  setSesion(sesion: Proyeccion){
    this.sesiones.push(sesion);
  }
  borrarSesion(i:number){
    this.sesiones.splice(i,1);
  }
}
