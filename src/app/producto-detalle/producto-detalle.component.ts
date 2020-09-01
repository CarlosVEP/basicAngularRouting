import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/Producto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto:Producto;
  constructor(private ruta:ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.producto=JSON.parse(this.ruta.snapshot.params.producto);
    console.log(this.producto);
  }

}
