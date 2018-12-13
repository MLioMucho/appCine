import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class CargaimagenService {

  public urlScriptPHP='http://localhost/proyectoCine/appCine/src/app/api/backend.php'; //TODO -> Posible cambio de direccion si se sube a un servidor



  public postFileImagen(imagenSubir: File){
    const formData = new FormData();
    formData.append('Cover',imagenSubir,imagenSubir.name);

    return this.http.post(this.urlScriptPHP, formData);

  }

constructor(private http: HttpClient ) { }
}
