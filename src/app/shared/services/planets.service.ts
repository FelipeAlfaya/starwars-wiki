import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import PlanetsResponse from '../interfaces/planets-response';
import { Http } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  private readonly endpoint: string;

  constructor(private http: Http) {
    this.endpoint = 'planets';
  }

  public getAllPlanets(): Observable<PlanetsResponse> {
    return this.http.get(this.endpoint);
  }
}
