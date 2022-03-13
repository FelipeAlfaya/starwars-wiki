import Planet from './planet';

export default interface PlanetsResponse {
  count?: number;
  binded?: number;
  next?: string;
  previous?: string;
  results?: Planet[];
}
