
import { Injectable } from '@angular/core';

@Injectable()
export class JugadoresService {

  private jugadores:Jugador[] = [
    {
      "nombre":"Campana, Marti­n Nicolas",
      "nickname":"",
      "numero":25,
      "puesto":"arquero",
      "img":"assets/img/25-campania.png",
      "fechanac":"29/05/1989",
      "lugarnac":"Maldonado (URU)",
      "peso":"75",
      "altura":"1.85",
      "logros":"",
      "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        "nombre":"Bacchia Renzo",
        "nickname":"",
        "numero":31,
        "puesto":"arquero",
        "img":"assets/img/31-bacchia.png",
        "fechanac":"23/01/1999",
        "lugarnac":"Montevideo Uruguay",
        "peso":"80kg",
        "altura":"1.85",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        "nombre":"Alvarez Milton",
        "nickname":"",
        "numero":13,
        "puesto":"arquero",
        "img":"assets/img/13-alvarez.png",
        "fechanac":"26/01/1989",
        "lugarnac":"Capital Federal",
        "peso":"86kg",
        "altura":"1.85mts",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },  
      {
        "nombre":"Franco Alan",
        "nickname":"",
        "numero":2,
        "puesto":"defensor",
        "img":"assets/img/2-franco.png",
        "fechanac":"11/10/1996",
        "lugarnac":"",
        "peso":"77kg",
        "altura":"1.83mts",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        "nombre":"Silva Gaston",
        "nickname":"",
        "numero":20,
        "puesto":"defensor",
        "img":"assets/img/20-gastonsilva.png",
        "fechanac":"05/03(1994",
        "lugarnac":"",
        "peso":"74kg",
        "altura":"1.85mts",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },      
      {
        "nombre":"Bustos Fabricio",
        "nickname":"",
        "numero":16,
        "puesto":"defensor",
        "img":"assets/img/16-bustos.png",
        "fechanac":"28/04/1996",
        "lugarnac":"",
        "peso":"66kg",
        "altura":"1.67",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },            
      {
        "nombre":"Sanchez Miño Juan",
        "nickname":"",
        "numero":6,
        "puesto":"defensor",
        "img":"assets/img/6-samchezminio.png",
        "fechanac":"01/01/1990",
        "lugarnac":"Capital Federal",
        "peso":"77kg",
        "altura":"1.83mts",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },           
      {
        "nombre":"Barreto Sergio",
        "nickname":"",
        "numero":24,
        "puesto":"defensor",
        "img":"assets/img/24-barreto.png",
        "fechanac":"24/04/1999",
        "lugarnac":"",
        "peso":"77kg",
        "altura":"1.83mts",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },             
      {
        "nombre":"Barboza Alexander",
        "nickname":"",
        "numero":26,
        "puesto":"defensor",
        "img":"assets/img/26-barboza.png",
        "fechanac":"16/03/1995",
        "lugarnac":"La Matanza, Buenos Aires",
        "peso":"70kg",
        "altura":"1.93",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },      
      {
        "nombre":"Ortega Thomas",
        "nickname":"",
        "numero":33,
        "puesto":"defensor",
        "img":"assets/img/33-ortega.jpg",
        "fechanac":"06/12/2000",
        "lugarnac":"",
        "peso":"",
        "altura":"",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        "nombre":"Lando Facundo",
        "nickname":"",
        "numero":36,
        "puesto":"defensor",
        "img":"assets/img/36-lando.jpg",
        "fechanac":"16/02/1999",
        "lugarnac":"",
        "peso":"73kg",
        "altura":"1,76mts",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        "nombre":"Hernandez Pablo",
        "nickname":"",
        "numero":19,
        "puesto":"mediocampista",
        "img":"assets/img/19-hernandez.png",
        "fechanac":"24/10/1986",
        "lugarnac":"Tucuman",
        "peso":"85kg",
        "altura":"1.84mts",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },                                    
      {
        "nombre":"Benavidez Carlos",
        "nickname":"",
        "numero":21,
        "puesto":"mediocampista",
        "img":"assets/img/21-benavidez.png",
        "fechanac":"30/03/1998",
        "lugarnac":"Montevideo, Uruguay",
        "peso":"77kg",
        "altura":"1,80mts",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },            
      {
        "nombre":"Mercado Diego",
        "nickname":"",
        "numero":38,
        "puesto":"mediocampista",
        "img":"assets/img/38-mercado.jpg",
        "fechanac":"03/01/1997",
        "lugarnac":"Capital Federal",
        "peso":"72kg",
        "altura":"1.72",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },            
      {
        "nombre":"Roa Andres",
        "nickname":"",
        "numero":7,
        "puesto":"mediocampista",
        "img":"assets/img/7-roa.png",
        "fechanac":"23/05/1993",
        "lugarnac":"",
        "peso":"67kg",
        "altura":"1.75",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },           
      {
        "nombre":"Togni Gaston",
        "nickname":"",
        "numero":17,
        "puesto":"mediocampista",
        "img":"assets/img/17-togni.png",
        "fechanac":"20/09/1997",
        "lugarnac":"General Pinto, Buenos Aires",
        "peso":"67kg",
        "altura":"1,73",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },            
      {
        "nombre":"Blanco Domingo",
        "nickname":"",
        "numero":23,
        "puesto":"mediocampista",
        "img":"assets/img/23-blanco.png",
        "fechanac":"22/04/1995",
        "lugarnac":"Capital Federal",
        "peso":"63kg",
        "altura":"1.67 mts",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },            
      {
        "nombre":"Soñora Alan",
        "nickname":"",
        "numero":15,
        "puesto":"mediocampista",
        "img":"assets/img/15-alan.jpg",
        "fechanac":"03/08/1998",
        "lugarnac":"",
        "peso":"65 kg",
        "altura":"1.71 mts",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },            
      {
        "nombre":"Gonzalez Lucas",
        "nickname":"",
        "numero":14,
        "puesto":"mediocampista",
        "img":"assets/img/14-saltita.jpg",
        "fechanac":"03/06/2000",
        "lugarnac":"San Salvador de Jujuy",
        "peso":"68 kg",
        "altura":"1,69",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },            
      {
        "nombre":"Romero Lucas",
        "nickname":"",
        "numero":22,
        "puesto":"mediocampista",
        "img":"assets/img/22-lucas.jpg",
        "fechanac":"18/04/1994",
        "lugarnac":"Capital Federal",
        "peso":"70 kg",
        "altura":"1.67 mts",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },            
      {
        "nombre":"Romero Silvio",
        "nickname":"",
        "numero":18,
        "puesto":"delantero",
        "img":"assets/img/18-silvio-01.jpg",
        "fechanac":"22/07/1988",
        "lugarnac":"",
        "peso":"76 kg",
        "altura":"1.77 mts",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },                                                                                                                                                                                                                                                                   
      {
        "nombre":"Romero Brian",
        "nickname":"",
        "numero":27,
        "puesto":"delantero",
        "img":"assets/img/27-braian.jpg",
        "fechanac":"15/06/1991",
        "lugarnac":"",
        "peso":"70",
        "altura":"1.75",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },            
      {
        "nombre":"Fernandez Leandro",
        "nickname":"",
        "numero":29,
        "puesto":"delantero",
        "img":"assets/img/29-leanlove-01.jpg",
        "fechanac":"12/03/1991",
        "lugarnac":"",
        "peso":"74",
        "altura":"1.76",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        "nombre":"Dominguez Cecilio",
        "nickname":"",
        "numero":11,
        "puesto":"delantero",
        "img":"assets/img/11-ceciliodominguez.png",
        "fechanac":"11/08/1994",
        "lugarnac":"Asuncion, Paraguay",
        "peso":"",
        "altura":"1.78",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        "nombre":"Velasco Alan",
        "nickname":"",
        "numero":9,
        "puesto":"delantero",
        "img":"assets/img/9-velasco.png",
        "fechanac":"27/07/2002",
        "lugarnac":"",
        "peso":"63",
        "altura":"1.67",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        "nombre":"Martinez Braian",
        "nickname":"",
        "numero":40,
        "puesto":"delantero",
        "img":"assets/img/40-chaco.jpg",
        "fechanac":"18/08/1999",
        "lugarnac":"",
        "peso":"",
        "altura":"",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },                  
      {
        "nombre":"Pusineri Lucas",
        "nickname":"",
        "numero":0,
        "puesto":"Cuerpo Tecnico",
        "img":"assets/img/pusi-01.jpg",
        "fechanac":"16/07/1976",
        "lugarnac":"capital federal",
        "peso":"",
        "altura":"",
        "logros":"",
        "bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }   
  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }


  getJugadores():Jugador[]{
    return this.jugadores;
  }

  getJugador( idx: string ){
    return this.jugadores[idx];
  }

  buscarJugadores( termino:string ):Jugador[]{

    let jugadoresArr:Jugador[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.jugadores.length; i ++ ){

      let jugador = this.jugadores[i];

      let nombre = jugador.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        jugador.idx = i;
        jugadoresArr.push( jugador )
      }

    }

    return jugadoresArr;

  }


}


export interface Jugador{
  nombre: string,
  nickname: string,
  numero: number,
  puesto: string,
  img: string,
  fechanac: string,
  lugarnac: string,
  peso: string,
  altura: string,
  logros: string,
  bio: string,
  idx?: number;
};   