import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Skills } from 'src/app/modelos/skills';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input() skillsList: any;
  public skillses:Skills[]=[]
  
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.obtenerSkillses();
  }

  public obtenerSkillses():void{
    this.portfolioService.obtenerSkills().subscribe(
      {next: (Response: Skills[]) => {
        this.skillses=Response;
      },
    error: (error:HttpErrorResponse) => {
      alert(error.message);
    }
    })
  }

}
