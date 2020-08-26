import { Component, OnInit } from '@angular/core';

interface Animal{
  nombre:string;
  precio:number;
  descripcion:string;
};

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  perros:Animal[];
  constructor() { 
    this.perros=[{
      nombre:"Pancho",
      precio:500.50,
      descripcion:"perro pequeño"
    },{
      nombre:"Shiba Inu",
      precio:1000,
      descripcion:"The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
    },{
      nombre:"Rambo",
      precio:1400.60,
      descripcion:"Perro mediano."
    },];
  }

  ngOnInit(): void {
  }

}
