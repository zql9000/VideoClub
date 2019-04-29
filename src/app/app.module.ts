import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { ListaPeliculasComponent } from './components/lista-peliculas/lista-peliculas.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { ListaAlquileresComponent } from './components/lista-alquileres/lista-alquileres.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { DetalleClienteComponent } from './components/detalle-cliente/detalle-cliente.component';
import { DetalleAlquilerComponent } from './components/detalle-alquiler/detalle-alquiler.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    ListaPeliculasComponent,
    ListaClientesComponent,
    ListaAlquileresComponent,
    DetallePeliculaComponent,
    DetalleClienteComponent,
    DetalleAlquilerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
