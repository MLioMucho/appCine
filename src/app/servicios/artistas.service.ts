import { Injectable } from '@angular/core';
import { Artista } from '../modelos/artista';

@Injectable()
export class ArtistasService {

  artistas: any =[
    {
      idArtista:		1,
	    nombre:	'Ron Howard',
	    weboficial:		'https://www.imdb.com/name/nm0000165/',
      papel: ['Director']
    },
    {
      idArtista:		2,
	    nombre:	'Anthony Russo',
	    weboficial:		'https://es.wikipedia.org/wiki/Hermanos_Russo',
      papel: ['Director']
    },
    {
        idArtista:		3,
  	    nombre:	'Joe Russo',
  	    weboficial:		'https://es.wikipedia.org/wiki/Hermanos_Russo',
        papel: ['Director']
    },
    {
        idArtista:		4,
        nombre:	'Stan Lee',
        weboficial:		'https://es.wikipedia.org/wiki/Stan_Lee',
        papel: ['Director','Productor']
    },
    {
        idArtista:		5,
        nombre:	'Robert Downey Jr.',
        weboficial:		'http://www.robertdowneyjrmusic.com/',
        papel: ['Actor']
    }
  ]
  getArtistas(){
    return this.artistas;
  }

  setArtistas(artista:Artista){
    this.artistas.push(artista);
  }

  ultimoArtista(){
    return this.artistas[this.artistas.length-1].idArtista+1;
  }

  borraArtista(i:number){
    this.artistas.splice(i,1);
  }

  constructor() { }

}
