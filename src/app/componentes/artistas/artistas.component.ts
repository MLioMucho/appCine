import { Component, OnInit, ViewChild } from '@angular/core';
import { ArtistasService } from '../../servicios/artistas.service';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css']
})
export class ArtistasComponent implements OnInit {

  @ViewChild('formart') formart: NgForm;

  artistas: any;
  artista: any;
  public alerta: string='';
  editar:boolean=false;

//  public model_1:any;

  constructor( private artistasService: ArtistasService) {
    this.artista = {
        idArtista:'',
        nombre:'',
        papel:'',
        webficial: ''
    }

  }
  onSubmit(){
    if(this.editar)
    {

    }
    else {

    this.artista.idArtista=this.formart.value.idArtista;
    this.artista.nombre=this.formart.value.nombre;
    this.artista.papel = this.formart.value.papel;
    this.artista.weboficial=this.formart.value.weboficial;

    this.artistas.push(this.artista);
    }
    this.alerta="Artista añadido";
  }



  editArtista(i){
    this.formart.value.idArtista=this.artistas[i].idArtista;
    this.formart.value.nombre=this.artistas[i].nombre;
    this.formart.value.papel=this.artistas[i].papel;
    this.formart.value.weboficial=this.artistas[i].weboficial;

    $("#idArtista").val(this.artistas[i].idArtista);
    $("#nombre").val(this.artistas[i].nombre);
    $("#papel").val(this.artistas[i].papel);
    $("#weboficial").val(this.artistas[i].weboficial);

    this.editar=true;

  }

  deleteArtista(i){
    let answer=confirm("¿Seguro que quieres borrar?");

    if (answer) {
      this.artistas.splice(i,1);
      this.alerta = "Artista eliminado";
    }
  }
  closeAlert(): void {
    this.alerta="";
    this.formart.reset();
  }
  ngOnInit() {
    this.artistas = this.artistasService.getArtistas(); // Para mostrar el metodo getArtistas y acceder a un dato concreto del objeto

  }

}
