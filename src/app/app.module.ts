import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './componentes/app-navbar/app-navbar.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { EstudiosRealizadosComponent } from './componentes/estudios-realizados/estudios-realizados.component';
import { ContactameComponent } from './componentes/contactame/contactame.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    SobreMiComponent,
    ExperienciaLaboralComponent,
    EstudiosRealizadosComponent,
    ContactameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
