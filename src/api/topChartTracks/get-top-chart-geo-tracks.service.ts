import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class GetTopChartTracksServiceGEO {
  constructor(private http: HttpClient) {}

  sub() {
    return this.http.get(
      `${environment.apiUrl_lastFM}?method=geo.gettoptracks&country=georgia&api_key=${environment.API_KEY_lastFM}&format=${environment.Format_lastFM}`
    );
  }
}
