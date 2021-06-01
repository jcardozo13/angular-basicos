import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzServices{

    private _personajes : Personaje[] = [
    {
        nombre: 'p1',
        poder: 15000
    },
    {
        nombre: 'p2',
        poder: 7500
    }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }
    
    constructor(){
        console.log('servicio inicializado..');
    }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}