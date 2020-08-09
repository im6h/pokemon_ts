export interface Pokemon {
  num?: string;
  name?: string;
  types?: Array<string>;
  height?: number;
  weight?: number;
  img?: string;
  weaknesses?: Array<string>;
  evolution?: Array<object>;
  info?: string;
}
