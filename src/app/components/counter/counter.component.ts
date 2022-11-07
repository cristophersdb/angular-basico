import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  numero: number = 0;
  base = 5;

  sumAndRest = (valor: number) => {
    valor === -5 && this.numero === 0
      ? alert('no puede ser menor a 0')
      : (this.numero += valor);
  };
}
