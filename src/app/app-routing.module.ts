import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAlquileresComponent } from './components/lista-alquileres/lista-alquileres.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { ListaPeliculasComponent } from './components/lista-peliculas/lista-peliculas.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/alquileres', pathMatch: 'full' },
  { path: 'alquileres',  component: ListaAlquileresComponent },
  { path: 'clientes',  component: ListaClientesComponent },
  { path: 'peliculas',  component: ListaPeliculasComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
