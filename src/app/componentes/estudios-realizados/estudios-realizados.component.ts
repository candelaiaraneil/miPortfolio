import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudios-realizados',
  templateUrl: './estudios-realizados.component.html',
  styleUrls: ['./estudios-realizados.component.css']
})
export class EstudiosRealizadosComponent implements OnInit {
  @Input() educacionList: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
