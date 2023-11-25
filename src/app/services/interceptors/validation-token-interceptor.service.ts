import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

import { TokenForHttpRequstesService } from 'src/api/token-for-http-requstes.service';

// import

@Injectable({
  providedIn: 'root',
})
export class ValidationTokenInterceptorService {
  constructor(private tokenSer: TokenForHttpRequstesService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('ss');
        if (error.status === 401) {
          this.tokenSer.tokenValid$.next(false);
          this.tokenSer.updateToken();
        }
        return throwError(error);
      })
    );
  }
}
