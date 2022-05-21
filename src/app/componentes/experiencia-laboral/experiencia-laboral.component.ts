import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Experiencia } from 'src/app/modelos/experiencia';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  @Input() experienciaList: any;
  public experiencias:Experiencia[]=[]
  
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.obtenerExperiencias();
  }

  public obtenerExperiencias():void{
    this.portfolioService.obtenerExperiencia().subscribe(
      {next: (Response: Experiencia[]) => {
        this.experiencias=Response;
      },
    error: (error:HttpErrorResponse) => {
      alert(error.message);
    }
    })
  }

}
