import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { JugadoresService } from './servicios/jugadores.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { JugadorTarjetaComponent } from './components/jugador-tarjeta/jugador-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    JugadoresComponent,
    JugadorComponent,
    BuscadorComponent,
    JugadorTarjetaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    JugadoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
