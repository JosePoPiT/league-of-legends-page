import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campeon } from '../interfaces/campeones.interface';

@Injectable({
  providedIn: 'root',
})
export class CampeonesService {
  constructor(private http: HttpClient) {}

  getCampeones(): Observable<Campeon[]> {
    return this.http.get<Campeon[]>(
      'https://ddragon.leagueoflegends.com/cdn/13.14.1/data/es_ES/champion.json'
    );
  }
  // getCampeones2(): Observable<Datum[]> {
  //   return this.http.get<Datum[]>( 'http://ddragon.leagueoflegends.com/cdn/11.23.1/data/es_ES/champion.json')
  // }

  getCampeonPorId(id: string): Observable<any> {
    return this.http.get<any>(
    `https://ddragon.leagueoflegends.com/cdn/13.14.1/data/es_ES/champion/${id}.json`   
    );
  }
}
