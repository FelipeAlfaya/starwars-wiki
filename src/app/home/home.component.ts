import { Component, OnInit } from '@angular/core';
import Character from '../shared/interfaces/character';
import Planet from '../shared/interfaces/planet';
import { CharactersService } from '../shared/services/characters.service';
import { PlanetsService } from '../shared/services/planets.service';
import SwiperCore, { Navigation } from 'swiper';
import { SpeciesService } from '../shared/services/species.service';
import Species from '../shared/interfaces/species';
import { VehiclesService } from '../shared/services/vehicles.service';
import Vehicles from '../shared/interfaces/vehicles';
import { FilmsService } from '../shared/services/films.service';
import Films from '../shared/interfaces/films';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public characters: Character[];
  public planets: Planet[];
  public species: Species[];
  public vehicles: Vehicles [];
  public films: Films [];

  constructor(
    private charactersService: CharactersService,
    private planetsService: PlanetsService,
    private speciesService: SpeciesService,
    private vehiclesService: VehiclesService,
    private filmsService: FilmsService
  ) {
    this.characters = [];
    this.planets = [];
    this.species = [];
    this.vehicles = [];
    this.films = [];
  }

  ngOnInit(): void {
    SwiperCore.use([Navigation]);
    this.getCharacters();
    this.getPlanets();
    this.getSpecies();
    this.getVehicles();
    this.getFilms();
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
  public getSpecies(): void {
    this.speciesService.getAllSpecies().subscribe((species) => {
      if (species.binded! > 0) {
        this.species = species.results!;
      }
    })
  }
  public getVehicles(): void{
    this.vehiclesService.getAllVehicles().subscribe((vehicles) => {
      if (vehicles.binded! > 0) {
        this.vehicles = vehicles.results!;
      }
    })
  }
  public getFilms(): void{
    this.filmsService.getAllFilms().subscribe((films) => {
      if (films.binded! > 0) {
        this.films = films.results!;
      }
    })
  }
}
