import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maximoRating: number = 5;
  @Input()
  ratingSeleccionado: number = 0;
  maximoRatingArr: Array<any> = [];
  votado: boolean = false;
  ratingAnterior: number;

  constructor() { }

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }

  manejarMouseEnter(index: number): void{
    this.ratingSeleccionado = index + 1;
  }

  manejarMouseLeave(): void{
    if (this.ratingAnterior !== 0) {
      this.ratingSeleccionado = this.ratingAnterior; 
    }else{
      this.ratingSeleccionado = 0;
    }
  }

  rate(index: number): void{
    this.ratingSeleccionado = index + 1;
    this.votado = true;
    this.ratingAnterior = this.ratingSeleccionado;
  }

}
