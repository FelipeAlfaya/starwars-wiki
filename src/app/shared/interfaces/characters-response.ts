import Character from './character';

export default interface CharacterResponse {
  count?: number;
  binded?: number;
  next?: string;
  previous?: string;
  results?: Character[];
}
