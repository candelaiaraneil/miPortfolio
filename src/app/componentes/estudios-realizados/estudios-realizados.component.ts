import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  public editarEducacion:Educacion | undefined;
  public borrarEducacion: Educacion | undefined;
  
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
  public onOpenModal(mode:String, educacion?: Educacion):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if (mode==='add'){
      button.setAttribute('data-target','#addEducationModal');
    } else if (mode==='delete'){
      this.borrarEducacion=educacion;
      button.setAttribute('data-target','#deleteEducationModal');
    } else if (mode==='edit'){
      this.editarEducacion=educacion;
      button.setAttribute('data-target', '#editEducationModal');
    }

    container?.appendChild(button);
    button.click();

  }
  public onAddEducation(addForm: NgForm){
    document.getElementById('add-education-form')?.click();
    this.portfolioService.agregarEducacion(addForm.value).subscribe({
      next: (response:Educacion) => {
        console.log(response);
        this.obtenerEducaciones();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }
  public onUpdateEducation(educacion: Educacion){
    this.editarEducacion=educacion;
    document.getElementById('add-education-form')?.click();
    this.portfolioService.updateEducacion(educacion).subscribe({
      next: (response:Educacion) => {
        console.log(response);
        this.obtenerEducaciones();
      },
      error:(error:HttpErrorResponse)=> {
        alert(error.message);
      }
    })
  }
  public onDeleteEducation(idEdu: number):void{

    this.portfolioService.borrarEducacion(idEdu).subscribe({
      next: (response:void) => {
        console.log(response);
        this.obtenerEducaciones();
      },
      error:(error:HttpErrorResponse)=> {
        alert(error.message);
      }
    })
  }

}
