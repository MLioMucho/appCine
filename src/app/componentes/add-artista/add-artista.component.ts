import { Component, OnInit,ViewChild } from '@angular/core';
import { Artista } from '../../modelos/artista';
import { ArtistasService } from '../../servicios/artistas.service';
import { NgForm, FormsModule } from "@angular/forms";

@Component({
  selector: 'app-add-artista',
  templateUrl: './add-artista.component.html',
  styleUrls: ['./add-artista.component.css']
})
export class AddArtistaComponent implements OnInit {

  artistas: ArtistasService; // TODO -> Posible cambio en cuando se comunique con la BDD

  selectArtista: Artista =new Artista();

  addOrEdit(): void {
    if (this.selectArtista.idArtista === 0) {
      this.selectArtista.idArtista=this.artistasService.ultimoArtista();
      this.artistasService.setArtistas(this.selectArtista);
    }
      this.borraFormulario();
  }

  editar(artista: Artista): void {
    this.selectArtista=artista;
  }

  borrarArtista(i): void {

    if (confirm("Seguro que quieres borrar el artista?")) {
      this.artistasService.borraArtista(i);
    }
    this.borraFormulario();

  }

  borraFormulario(): void {
    this.selectArtista=new Artista();
  }

  constructor(private artistasService: ArtistasService) { }


  ngOnInit() {
      this.artistas = this.artistasService.getArtistas();
  }

}
