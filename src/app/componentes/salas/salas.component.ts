import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from "@angular/forms";
import { SalasService } from '../../servicios/salas.service';

import { Sala } from '../../modelos/sala';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  salas : SalasService;
  sala: Sala = new Sala();

  addOrEdit(): void {
    if (this.sala.idSala === 0) {
      this.sala.idSala=this.salasService.ultimaSala();
      this.salasService.setSala(this.sala);
    }
      this.borraFormulario();
  }
  editar(estasala: Sala): void{
    this.sala = estasala;
    this.crearSala();
  }
  crearSala(){
    let tabla=$("#tsala").empty();
    let tbody=$("<tbody></tbody>");
    for (let i = 0; i < this.sala.filas; i++) {
      let trs=$("<tr></tr>");

        for (let j = 0; j < this.sala.columnas ; j++) {
        //  console.log(this.sala.columnas);
        //  console.log(j);
          let tds=$("<td></td>");
          let span=$("<span></span>").addClass("fas fa-couch");
          tds.append(span);
          trs.append(tds);
          }
      tabla.append(trs);
      }
  }

  borraFormulario(){
    this.sala=new Sala();
    this.sala.filas=this.sala.columnas=4;
    this.crearSala();

  }

  borrarSala(i): void {

    if (confirm("Seguro que quieres borrar el artista?")) {
      this.salasService.borrarSala(i);
    }
    this.borraFormulario();
  }

  constructor(private salasService: SalasService) { }

  ngOnInit() {
    this.salas = this.salasService.getSala();
  }

}
