import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { JugadoresService } from '../../servicios/jugadores.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html'
})
export class JugadorComponent {

  jugador:any = {};


  constructor( private activatedRoute: ActivatedRoute,
               private _jugadoresService: JugadoresService
    ){

    this.activatedRoute.params.subscribe( params =>{
        this.jugador = this._jugadoresService.getJugador( params['id'] );
        // console.log(this.jugador);
    });

  }

}
