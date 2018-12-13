import { Component, OnInit, ViewChild } from '@angular/core';
import { PeliculasService} from '../../servicios/peliculas.service';
import { NgForm, FormsModule } from '@angular/forms';
import { Pelicula } from '../../modelos/pelicula';
import { HttpClient } from '@angular/common/http';
import { SubirImagenService } from '../../servicios/subirImagen.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})



export class PeliculasComponent implements OnInit {

  public alerta: string ='';

  //Variables globales para formulario pelicula
  peliculas: PeliculasService;
  cover: boolean=false;
  selectPelicula: Pelicula = new Pelicula();

  //Variables globales para cargar imagenes
  public respuestaImagenEnviada;
  public resultadoCarga;
  public nombreFoto='';

  // Variables de configuracion
  public directorioCover="http://localhost/proyectoCine/imagenes/subir/"; // TODO -> Directorio donde se encuentran todos los poster de las peliculas


  constructor( private peliculasService: PeliculasService, private http: HttpClient, private subirImagenService: SubirImagenService/*, private enviandoImagen: CargaimagenService*/) { }
  /**
   * Metodo para insertar pelicula en el objeto
   * @return vacio
   */
  addOrEditPelicula():void {
    if (this.selectPelicula.idPeli === 0) {
        this.selectPelicula.idPeli=this.peliculasService.ultimaPelicula();// creamos el idPeli a partir de la ultima introducida

        this.peliculasService.setPeliculas(this.selectPelicula);
    }
      this.borraFormulario();
      this.alerta="Pelicula agregada ó modificada";
  }
  /**
   * Cargar la informacion de la pelicula en el formulario
   * @param  Tipo pelicula pelicula que carga
   */
  editar(pelicula:Pelicula):void {
    this.selectPelicula=pelicula;
    let direccion=this.selectPelicula.cover.split('/');
    this.nombreFoto=direccion[direccion.length-1]; // sacar el nombre de la foto si ya se encuentra en la base de datos para si se pulsa ver no borrarla
    this.selectPelicula.cover === '' ? this.cover=false: this.cover=true;
  }
  /**
   * Borra el formulario y oculta cover
   */
  borraFormulario(): void{
    this.selectPelicula = new Pelicula();
    this.cover=false;
  }
  /**
   * Borrar pelicula de la tabla
   * @param i indice que esta almacenado en el boton de borrar
   */
  borraPelicula(i): void {

    if (confirm("¿Seguro que quieres borrar?")) {
        this.peliculasService.borrarPelicula(i); // agrega(0) o elimina(1)
        this.alerta = "Película borrada";
        this.borraFormulario();
    }
  }
  /**
   * Cierra el aviso
   */
  closeAlert():void {
    this.alerta="";

  }
  /**
   * Cargar la imagen una vez subida al servidor
   * @return [description]
   */
  preCarga(): void{
    this.selectPelicula.cover=this.directorioCover+ this.nombreFoto;
    this.cover=true;
  }

  /**
   * Funcion para subir al servidor la imagen, concretamente a la carpeta donde se guardan las imagenes /assets/imagenes
   * configurado en el archivo php/backend localizado fuera del proyecto angular
   * @param  files [description]
   * @return       [description]
   */
  subirCover(files: FileList): void{
    this.nombreFoto=files[0].name;
    this.subirImagenService.postFileImagen(files[0]).subscribe(
      response => {
        this.respuestaImagenEnviada= response;
        if(this.respuestaImagenEnviada <=1 ){
          console.log("Error en el servidor");
        }
        else {
          if(this.respuestaImagenEnviada.code == 200 && this.respuestaImagenEnviada.status =="success")
          {
            this.resultadoCarga = 1; // subida correcta del archivo
          }
          else this.resultadoCarga = 2 ;
          }
      },
      error => (console.log(<any>error))
    );
  }

  ngOnInit() {
    this.peliculas = this.peliculasService.getPeliculas();
  }

}
