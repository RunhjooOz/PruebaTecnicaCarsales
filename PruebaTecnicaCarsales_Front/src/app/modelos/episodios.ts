export interface Episodios {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface RickAndMortyEpisodesResponse {
  results: Episodios[];
}
