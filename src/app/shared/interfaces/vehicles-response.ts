import Vehicles from './vehicles';

export default interface VehiclesResponse {
  count?: number;
  binded?: number;
  next?: string;
  previous?: string;
  results?: Vehicles[];
}