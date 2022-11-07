import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitán América',
  ];
  heroeBorrado: string = '';

  borrarHeroe = (index: number) => {
    this.heroes.length <= 1
      ? (this.heroeBorrado = '')
      : (this.heroeBorrado = this.heroes[index]);
    this.heroes.splice(index, 1);
  };
  constructor() {}

  ngOnInit(): void {}
}
