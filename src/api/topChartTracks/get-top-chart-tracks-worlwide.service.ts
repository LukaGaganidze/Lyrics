import { Injectable } from '@angular/core';

import { environment } from 'src/enviroment/enviroment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetTopChartTracksWorlwideService {
  constructor(private http: HttpClient) {}

  sub() {
    return this.http.get(
      `${environment.apiUrl_lastFM}?method=chart.gettoptracks&api_key=${environment.API_KEY_lastFM}&format=${environment.Format_lastFM}`
    );
  }
}
