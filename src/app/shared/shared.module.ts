import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [HeaderComponent, CardComponent, CardCarouselComponent],
  exports: [HeaderComponent, CardComponent, CardCarouselComponent],
  imports: [CommonModule, RouterModule, SwiperModule],
})
export class SharedModule {}