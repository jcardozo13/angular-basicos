import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

 
  @Input() nuevo: Personaje ={
    nombre: '',
    poder: 0,
  }
 
  constructor(private dbzServices: DbzServices){}

  agregar():void{
      if (this.nuevo.nombre.trim().length == 0){ return ;}

      this.dbzServices.agregarPersonaje(this.nuevo);
   
      this.nuevo = {
        nombre:'',
        poder : 0
      }
     
  }  


}
