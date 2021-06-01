import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    declarations: [
        //todos los componentes relacionados este modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        //los componentes que vamos hacer publicos en toda la aplicación
        ListadoComponent
    ],
    imports: [
        //aca se importan otros modulos de la aplicacion
        CommonModule // me ofrece directivas de angular como el ngFor y ngIf
    ]
}
)
export class HeroesModule {}
