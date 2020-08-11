export interface Pokemon {
  num?: number;
  name?: string;
  types?: Array<string>;
  height?: number;
  weight?: number;
  img?: string;
  weaknesses?: Array<string>;
  evolution?: Array<object>;
  info?: string;
}
