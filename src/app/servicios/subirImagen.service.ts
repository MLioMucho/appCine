import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class SubirImagenService {

  public urlphp='http://localhost/proyectoCine/php/backend.php';

  public postFileImagen(imagenSubir: File){
    const formData = new FormData();
    formData.append('Cover', imagenSubir,imagenSubir.name);
    
    return this.http.post(this.urlphp,formData);

  }

  public datosFileImagen(imagenSubir: File){
    return imagenSubir.webkitRelativePath;
  }

  constructor(private http: HttpClient) { }
}
