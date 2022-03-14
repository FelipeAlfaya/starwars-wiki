import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import SpeciesResponse from '../interfaces/species-response';
import { Http } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  private readonly endpoint: string;

  constructor(private http: Http) {
    this.endpoint= 'species';
   }

   public getAllSpecies(): Observable<SpeciesResponse> {
     return this.http.get(this.endpoint);
   }
}
