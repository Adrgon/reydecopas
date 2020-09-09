import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JugadoresService } from '../../servicios/jugadores.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  jugadores:any[] = []
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
              private _jugadoresService: JugadoresService) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.termino =params['termino'];
      this.jugadores = this._jugadoresService.buscarJugadores( params['termino'] );
      console.log( this.jugadores );
    });
  }
}
