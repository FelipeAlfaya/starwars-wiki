import Films from './films';

export default interface FilmsResponse {
  count?: number;
  binded?: number;
  next?: string;
  previous?: string;
  results?: Films[];
}