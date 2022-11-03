import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class UserTokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const userToken = localStorage.getItem("userToken");

    request = request.clone({
      setParams: {
        userToken: userToken || '',
      },
    });
    return next.handle(request);
  }
}
