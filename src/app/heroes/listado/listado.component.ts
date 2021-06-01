import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','IronMan','Hulk','Thor','Capitan america'];
  
  borrado: string = '' || undefined;

  borrarHeroe(): void{
    
    this.borrado = this.heroes.shift() || '';
    console.log(this.borrado);

  }

}
