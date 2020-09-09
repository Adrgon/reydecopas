import { Component, OnInit } from '@angular/core';
import { JugadoresService, Jugador } from '../../servicios/jugadores.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html'
})
export class JugadoresComponent implements OnInit {

  jugadores:Jugador[] = [];

  constructor( private _jugadoresService:JugadoresService,
               private router:Router
                ) {
    // console.log("constructor");
  }

  ngOnInit() {
    this.jugadores = this._jugadoresService.getJugadores();
  }

  verJugador( idx:number ){
    this.router.navigate( ['/jugador',idx] );
  }

}
