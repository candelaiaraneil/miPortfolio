import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  @Input() experienciaList: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
