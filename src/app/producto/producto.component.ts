import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/Producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos:Array<Producto> =new Array<Producto>();
  constructor(private ruta:Router) { 
    this.productos=[{
      nombre:"Retro steampunk",
      imagen:"https://cdn11.bigcommerce.com/s-ob7m2s98/images/stencil/2000x2000/products/11936/31568/1__97606.1503326747.jpg",
      precio:500.50,
      descripcion:"Para adornar la sala"
    },{
      nombre:"Otro steampunk",
      imagen:"https://images-na.ssl-images-amazon.com/images/I/81mhWhQxQEL._AC_SL1500_.jpg",
      precio:1000,
      descripcion:"Para coleccionistas."
    },{
      nombre:"jejeje",
      imagen:"https://cotaglobal.com/wp-content/uploads/2019/09/4702.jpg",
      precio:1400.60,
      descripcion:"Para regalar."
    },];
  }
  pasarParametro(producto:Producto){
    // console.log("para enviar: "+productoDetail);
    this.ruta.navigate(["productoDetalle",{producto:JSON.stringify(producto)}]);
  }
  ngOnInit(): void {
  }

}
