import { Component } from '@angular/core';
import { Usuario } from './modelos/usuario';
import { PortfolioService } from './servicios/portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public usuario : Usuario | undefined;
  public editUsuario: Usuario | undefined;
  title = 'mi-primer-portfolio';
  data: any;


  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.portfolioService.obtenerDatos().subscribe((data) => {
      //this.data = data;
      console.log(data);
    })
  }
}
