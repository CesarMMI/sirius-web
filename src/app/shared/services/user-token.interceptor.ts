import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class UserTokenInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      this.router.navigate(["/auth/login"]);
      throw new Error("User token vazio");
    }
    request = request.clone({
      setParams: {
        userToken,
      },
    });
    return next.handle(request);
  }
}
