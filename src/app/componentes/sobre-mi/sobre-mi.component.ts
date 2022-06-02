import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  @Input() data: any;
  usuario: Usuario | undefined;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  public obtenerUsuarios(): void {
    this.portfolioService.obtenerUsuario(1).subscribe(
      {
        next: (Response: Usuario) => {
          console.log(Response);
          this.usuario = Response;
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }
      })
  }
}
