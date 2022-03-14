import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import FilmsResponse from '../interfaces/films-response';
import { Http } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private readonly endpoint: string;

  constructor(private http: Http) {
    this.endpoint= 'films';
   }
   public getAllFilms(): Observable<FilmsResponse> {
     return this.http.get(this.endpoint);
   }
}