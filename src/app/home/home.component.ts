import { Component, OnInit } from '@angular/core';
import Character from '../shared/interfaces/character';
import Planet from '../shared/interfaces/planet';
import { CharactersService } from '../shared/services/characters.service';
import { PlanetsService } from '../shared/services/planets.service';
import SwiperCore, { Navigation } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public characters: Character[];
  public planets: Planet[];

  constructor(
    private charactersService: CharactersService,
    private planetsService: PlanetsService
  ) {
    this.characters = [];
    this.planets = [];
  }

  ngOnInit(): void {
    SwiperCore.use([Navigation]);
    this.getCharacters();
    this.getPlanets();
  }

  public getCharacters(): void {
    this.charactersService.getAllCharacters().subscribe((characters) => {
      if (characters.binded! > 0) {
        this.characters = characters.results!;
      }
    });
  }

  public getPlanets(): void {
    this.planetsService.getAllPlanets().subscribe((planets) => {
      if (planets.binded! > 0) {
        this.planets = planets.results!;
      }
    });
  }
}
