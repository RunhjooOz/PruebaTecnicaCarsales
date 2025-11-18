import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Episodios, RickAndMortyEpisodesResponse } from '../modelos/episodios';

@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  private apiUrl = 'https://localhost:7279/Episodios_RyM_'; 

  constructor(private http: HttpClient) { }

getEpisodios(): Observable<Episodios[]> {
  return this.http.get<Episodios[]>(this.apiUrl);
}

}
