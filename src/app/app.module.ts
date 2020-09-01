import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PipesComponent } from './pipes/pipes.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { InicioComponent } from './inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AgregarUsuariosComponent } from './usuarios/agregar-usuarios/agregar-usuarios.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PipesComponent,
    Pagina404Component,
    InicioComponent,
    UsuariosComponent,
    AgregarUsuariosComponent,
    EditarUsuariosComponent,
    ArticuloComponent,
    ArticuloDetalleComponent,
    ProductoComponent,
    ProductoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
