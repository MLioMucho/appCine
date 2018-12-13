import { Injectable } from '@angular/core';
import { Pelicula } from '../modelos/pelicula';

@Injectable()
export class PeliculasService {

  peliculas: any =[
    {
      idPeli: 1,
	    titulo: 'Vengadores: Infinity War',
	    sinopsis: 'A medida que los Vengadores y sus aliados han seguido protegiendo al mundo de amenazas demasiado grandes para que cualquier otro héroe las pueda manejar, un nuevo peligro surge de las sombras cósmicas: Thanos. Un despiadado titán intergaláctico, cuyo objetivo es conseguir con las seis Gemas del Infinito, artefactos de poder inimaginable, y usarlas para infligir su torcida voluntad en toda la realidad. Todo por lo que han luchado los Vengadores ha conducido a este momento, el    destino de la Tierra y la existencia misma nunca han sido más inciertos. ',
	    weboficial: 'https://www.marvel.com/avengers',
	    tituloOriginal: 'Avengers: Infinity War',
	    genero: 'Superheroes',
	    pais: 'Estados Unidos',
	    anio: '2018',
	    duracion: '149',
	    clasificacion: '13',
	    cover: '../assets/imagenes/InfinityWar.jpg',
	    idioma: 'Spain, VOS',
      director: 'Joe Rusoo, Anthony Russo, Stan Lee'
    },
    {
      idPeli: 2,
      titulo: 'Han Solo: una historia de Star Wars',
      sinopsis: 'Han Solo: una historia de Star Wars es una película centrada en el personaje de Han Solo a bordo del Halcón Milenario. A través de una serie de aventuras en un submundo criminal oscuro y peligroso, Han Solo se hace amigo de su futuro copiloto Chewbacca y conoce al conocido jugador Lando Calrissian. La película se sitúa temporalmente algunos años antes de que Han conociera a Luke Skywalker y a Obi Wan Kenobi en Una nueva esperanza, así como de los acontecimientos ocurridos en Rogue One: una historia de Star Wars.',
      weboficial: 'https://www.starwars.com/films/solo',
      tituloOriginal: 'Solo: A Star Wars Story',
      genero: 'Space Opera',
      pais: 'Estados Unidos',
      anio: '2018',
      duracion: '135',
      clasificacion: '13',
      cover: '',
      idioma: 'Spain, French, VOS',
      director: 'Ron Howard'
    }
  ]
  /**
   * La informacion de todas la peliculas almacenadas
   * @return array tipo any, con la informacion de las peliculas almacenadas
   */
  getPeliculas(){

    return this.peliculas;
  }
  /**
   * Insertar una pelicula al array de las peliculas
   * @param  pelicula Tipo de dato pelicula (ver clase en carpeta modelos)
   * @return          void
   */
  setPeliculas(pelicula: Pelicula){
    this.peliculas.push(pelicula);
  }
  /**
   * Metodo para averiguar el idPeli de la ultima pelicula
   * @return Devuelve tipo de number, con el idPeli siguiente disponible.
   */
  ultimaPelicula(){
    return this.peliculas[this.peliculas.length-1].idPeli+1;
  }
  /**
   * Borra del array pelicula el que tiene el indice i
   * @param  i Tipo number. Indice de la pelicula que se encuentra en el array
   * @return   void
   */
  borrarPelicula(i){
    this.peliculas.splice(i,1);
  }
  constructor() { }

}
