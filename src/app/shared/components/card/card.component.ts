import { Component, Input, OnInit } from '@angular/core';
import Character from '../../interfaces/character';
import Planet from '../../interfaces/planet';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() public data: Character | Planet;
  @Input() public id: number;
  public character!: Character;
  public planet!: Planet;

  constructor() {
    this.data = {};
    this.id = 0;
  }

  ngOnInit(): void {
    if (this.data?.url?.includes('characters')) {
      this.character = this.data;
    } else if (this.data?.url?.includes('planets')) {
      this.planet = this.data;
    }
  }

  public expandInformations(): void {
    document
      .getElementById('card--' + this.removeWhitespaces(this.data?.name!))
      ?.classList.toggle('expanded');
  }

  public shrinkInformations(): void {
    document
      .getElementById('card--' + this.removeWhitespaces(this.data?.name!))
      ?.classList.remove('expanded');
  }

  public removeWhitespaces(value: string): string {
    return value.replace(/\s/g, '-');
  }

  public renderValue(value: string): string {
    let num = parseFloat(value);
    if (num <= 100) {
      num *= 1000;
    } else if (num > 100 && num < 1000) {
      num *= 100;
    }
    return String(num).replace(/(.)(?=(\d{3})+$)/g, '$1.');
  }
}
