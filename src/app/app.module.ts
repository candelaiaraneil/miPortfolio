import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './componentes/app-navbar/app-navbar.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { EstudiosRealizadosComponent } from './componentes/estudios-realizados/estudios-realizados.component';
import { ContactameComponent } from './componentes/contactame/contactame.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    SobreMiComponent,
    ExperienciaLaboralComponent,
    EstudiosRealizadosComponent,
    ContactameComponent,
    SkillsComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
