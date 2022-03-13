import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlanetsComponent } from './planets/planets.component';
import { SharedModule } from './shared/shared.module';
import { CharactersComponent } from './characters/characters.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { StarshipsComponent } from './starships/starships.component';
import { SpeciesComponent } from './species/species.component';
import { FilmsComponent } from './films/films.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanetsComponent,
    CharactersComponent,
    VehiclesComponent,
    StarshipsComponent,
    SpeciesComponent,
    FilmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
