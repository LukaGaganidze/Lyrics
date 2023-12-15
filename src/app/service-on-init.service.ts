import { Injectable } from '@angular/core';
import { TokenForHttpRequstesService } from 'src/api/token-for-http-requstes.service';

@Injectable({
  providedIn: 'root',
})
export class ServiceOnInitService {
  constructor(private tokenSer: TokenForHttpRequstesService) {}

  // The function will run on application bootstrap
  loadAppConfig(): void {
    const storedToken = localStorage.getItem('acessToken');

    if (storedToken) {
      return;
    } else {
      this.tokenSer.updateToken().subscribe((data) => {
        localStorage.setItem('acessToken', data);
      });
    }
  }
}

export function initializeApp(appConfigService: ServiceOnInitService) {
  return () => appConfigService.loadAppConfig();
}
