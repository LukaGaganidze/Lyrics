import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, Subscription, catchError, tap, throwError } from 'rxjs';

import { TokenForHttpRequstesService } from 'src/api/token-for-http-requstes.service';
import { environment } from 'src/enviroment/enviroment';

// import
@Injectable({
  providedIn: 'root',
})
export class ValidationTokenInterceptorService {
  TokenSubscription!: Subscription;

  constructor(private tokenSer: TokenForHttpRequstesService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // header
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    // body
    const requestBody = `grant_type=client_credentials&client_id=${environment.CLIENT_ID}&client_secret=${environment.CLIENT_SECRET}`;
    // if request is for token then add header and body
    if (request.url === 'https://accounts.spotify.com/api/token') {
      const modifiedRequest = request.clone({
        headers: headers,
        body: requestBody,
      });
      return next.handle(modifiedRequest);
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          localStorage.clear();
          this.tokenSer.updateToken().pipe(
            switchMap(() => this.tokenSer.apiTokenManager()),
            switchMap(() => {
              // Retry the original request with the new token
              const newRequest = this.addAuthorizationHeader(request);
              return next.handle(newRequest);
            })
          );
        }
        return throwError(error);
      })
    );
  }

  private addAuthorizationHeader(request: HttpRequest<any>): HttpRequest<any> {
    const token = localStorage.getItem('acessToken');
    if (token) {
      return request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return request;
  }
}
