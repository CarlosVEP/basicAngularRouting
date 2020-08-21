import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  texto:string="La vida es un Carnaval";
  multa:number=3500;
  ganancia:number=0.34;
  fechaNac:Date=new Date('12-23-2005');
  constructor() { }

  ngOnInit(): void {
  }

}
