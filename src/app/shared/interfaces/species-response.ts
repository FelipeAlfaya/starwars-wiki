import Species from './species';

export default interface SpeciesResponse {
  count?: number;
  binded?: number;
  next?: string;
  previous?: string;
  results?: Species[];
}