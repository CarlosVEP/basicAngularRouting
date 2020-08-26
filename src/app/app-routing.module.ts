import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AgregarUsuariosComponent } from './usuarios/agregar-usuarios/agregar-usuarios.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'usuarios', component: UsuariosComponent, children: [
      { path: 'agregar', component: AgregarUsuariosComponent },
      { path: 'editar', component: EditarUsuariosComponent }
    ]
  },
  { path: 'articulo', component: ArticuloComponent },
  { path: 'articuloDetalle/:nombre/:precio', component: ArticuloDetalleComponent },
  { path: '**', component: Pagina404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
