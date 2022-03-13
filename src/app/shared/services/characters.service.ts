import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CharacterResponse from '../interfaces/characters-response';
import { Http } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private readonly endpoint: string;

  constructor(private http: Http) {
    this.endpoint = 'characters';
  }

  public getAllCharacters(): Observable<CharacterResponse> {
    return this.http.get(this.endpoint);
  }
}
