import { Injectable } from "@angular/core";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { UserInfoService } from "../services/user-info/user-info.service";

@Injectable()
export class UserInfoInterceptor implements HttpInterceptor {
    constructor(private userInfoService: UserInfoService) {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        if (this.userInfoService.userInfoValue?.vendedorId) {
            request = request.clone({
                setParams: {
                    vendedorId:
                        this.userInfoService.userInfoValue!.vendedorId.toString(),
                },
            });
        }
        return next.handle(request);
    }
}
