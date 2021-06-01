import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  
  

  nuevo: Personaje ={
    nombre: 'Mestro Rochi',
    poder: 100000,
  }

  get personajes():Personaje[]{
    return this.dbzServices.personajes;
  }
 
  constructor(private dbzServices: DbzServices){

  }
}
