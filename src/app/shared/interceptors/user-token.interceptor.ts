import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokensService } from 'src/app/shared/services/tokens.service';

@Injectable()
export class UserTokenInterceptor implements HttpInterceptor {
  constructor(private tokensService: TokensService) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setParams: {
        userToken: this.tokensService.userToken
      },
    });
    return next.handle(request);
  }
}
