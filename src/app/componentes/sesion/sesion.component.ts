import { Component, OnInit } from '@angular/core';
import { NgForm,FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { PeliculasService} from '../../servicios/peliculas.service';
import { SalasService } from '../../servicios/salas.service';
import { SesionesService} from '../../servicios/sesiones.service';

import { Pelicula } from '../../modelos/pelicula';
import { Sala } from '../../modelos/sala';
import { Proyeccion } from '../../modelos/proyeccion';



@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  salas : SalasService;
  peliculas: PeliculasService;
  sesiones: SesionesService;

  proyeccion= new Proyeccion();
  peliProyec= new Pelicula();
  salaProyec= new Sala();

  enviar(peli: Pelicula){
    this.proyeccion.idPeli=peli.idPeli;
    this.peliProyec=peli;
  }
  enviarSala(sala: Sala){
    this.proyeccion.idSala=sala.idSala;
    this.salaProyec=sala;
  }
  borraFormulario(){
    this.proyeccion= new Proyeccion();
    this.peliProyec=new Pelicula();
    this.salaProyec=new Sala();
  }
  crearSesion(){
    this.sesionesService.setSesion(this.proyeccion);
    this.borraFormulario();
  }
  borrarSesion(i: number){
    this.sesionesService.borrarSesion(i);
  }
  constructor(private salasService: SalasService,
              private peliculasService: PeliculasService,
              private sesionesService: SesionesService
            ) { }

  ngOnInit() {
    this.salas = this.salasService.getSala();
    this.peliculas= this.peliculasService.getPeliculas();
    this.sesiones = this.sesionesService.getSesion();
  }

}
