import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CharacterResponse from '../interfaces/characters-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private readonly endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = 'https://wookieapi.vercel.app/api/characters';
  }

  public getAllCharacters(): Observable<CharacterResponse> {
    return this.http.get(this.endpoint);
  }
}
