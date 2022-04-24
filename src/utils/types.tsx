export type SpeciesTypes = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type CharacterTypes = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: [
    'https://swapi.dev/api/vehicles/14/',
    'https://swapi.dev/api/vehicles/30/'
  ];
  starships: [
    'https://swapi.dev/api/starships/12/',
    'https://swapi.dev/api/starships/22/'
  ];
  created: string;
  edited: string;
  url: string;
};

export type SpeciesListResponse = {
  count: number;
  next: null | string;
  previous: null | string;
  results: SpeciesTypes[];
};
