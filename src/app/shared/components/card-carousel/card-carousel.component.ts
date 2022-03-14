import { Component, Input, OnInit } from '@angular/core';
import Character from '../../interfaces/character';
import Planet from '../../interfaces/planet';
import Species from '../../interfaces/species';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss'],
})
export class CardCarouselComponent implements OnInit {
  @Input() public data: Character[] | Planet[] | Species[];

  constructor() {
    this.data = [];
  }

  ngOnInit(): void {}
}
