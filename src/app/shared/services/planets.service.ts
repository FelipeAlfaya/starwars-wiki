import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import PlanetsResponse from '../interfaces/planets-response';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  private readonly endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = 'https://wookieapi.vercel.app/api/planets';
  }

  public getAllPlanets(): Observable<PlanetsResponse> {
    return this.http.get(this.endpoint);
  }
}
