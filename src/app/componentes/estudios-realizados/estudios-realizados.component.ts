import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/modelos/educacion';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-estudios-realizados',
  templateUrl: './estudios-realizados.component.html',
  styleUrls: ['./estudios-realizados.component.css']
})
export class EstudiosRealizadosComponent implements OnInit {
  @Input() educacionList: any;
  public educaciones:Educacion[]=[]
  
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.obtenerEducaciones();
  }

  public obtenerEducaciones():void{
    this.portfolioService.obtenerEducacion().subscribe(
      {next: (Response: Educacion[]) => {
        this.educaciones=Response;
      },
    error: (error:HttpErrorResponse) => {
      alert(error.message);
    }
    })
  }

}
