import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  copyright: string = '© M.lio';
  hoy: any = new Date();
  ///////// TODO variables a sustituir por el servicio///////////////////
  usuario: string = 'emilio';
  psw: string = '123456';
  admin:string = '1';


  login(form: NgForm){

    if(form.value.username === this.usuario && form.value.psw === this.psw){
      localStorage.setItem('username', form.value.username);
      localStorage.setItem('admin', this.admin );
      this.router.navigate(['/inicio']);
    }
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
