import { Component, Input, OnInit } from '@angular/core';
import CardProps from '../../interfaces/card-props';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() public data: any;
  public props: CardProps;

  constructor() {
    this.data = {};
    this.props = {};
  }

  ngOnInit(): void {
    if (this.data) {
      this.props.id = this.data?.id!;
      this.props.name = this.data?.name!;
      this.props.image = this.data?.image!;
      this.props.url = this.data?.url!;
    }
  }

  public expandInformations(): void {
    document
      .getElementById('card--' + this.removeWhitespaces(this.props?.name!))
      ?.classList.toggle('expanded');
  }

  public shrinkInformations(): void {
    document
      .getElementById('card--' + this.removeWhitespaces(this.props?.name!))
      ?.classList.remove('expanded');
  }

  public removeWhitespaces(value: string): string {
    return value.replace(/\s/g, '-');
  }
}
