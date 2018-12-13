import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from "jquery";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { EuroPipe } from './euro.pipe';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';

import { PeliculasService } from './servicios/peliculas.service';
import { ArtistasService } from './servicios/artistas.service';
import { SubirImagenService } from './servicios/subirImagen.service';
import { SalasService } from './servicios/salas.service';
import { SesionesService } from './servicios/sesiones.service';

import { AppComponent } from './app.component';
import { AddArtistaComponent } from './componentes/add-artista/add-artista.component';
import { PieComponent } from './componentes/pie/pie.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ArtistasComponent } from './componentes/artistas/artistas.component';
import { SalasComponent } from './componentes/salas/salas.component';
import { SesionComponent } from './componentes/sesion/sesion.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { Error404Component } from './componentes/error404/error404.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';


const routes: Routes = [
  { path:'', component: InicioComponent },
  { path:'inicio', component: InicioComponent },
//  { path:'artistas', component: ArtistasComponent},
  { path:'peliculas', component: PeliculasComponent, canActivate: [LoginGuard]},
  { path:'salas', component: SalasComponent, canActivate: [LoginGuard]},
  { path:'sesion', component: SesionComponent, canActivate: [LoginGuard]},
  { path: 'addartista', component: AddArtistaComponent, canActivate: [LoginGuard] },
  { path: 'iniciosesion', component: InicioSesionComponent, canActivate: [NoLoginGuard] },
  { path: '**', component: Error404Component}

];

@NgModule({
  declarations: [
    AppComponent,
    EuroPipe,
    ArtistasComponent,
    SalasComponent,
    SesionComponent,
    PeliculasComponent,
    InicioComponent,
    HeaderComponent,
    PieComponent,
    AddArtistaComponent,
    Error404Component,
    InicioSesionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],

  providers: [PeliculasService,
              ArtistasService,
              SubirImagenService,
              SalasService,
              SesionesService,
              LoginGuard,
              NoLoginGuard
            ],

  bootstrap: [AppComponent]
})
export class AppModule { }
