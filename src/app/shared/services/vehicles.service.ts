import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import VehiclesResponse from '../interfaces/vehicles-response';
import { Http } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private readonly endpoint: string; 

  constructor(private http: Http) {
    this.endpoint= 'vehicles';
   }
   public getAllVehicles(): Observable<VehiclesResponse> {
    return this.http.get(this.endpoint);
  }
}
