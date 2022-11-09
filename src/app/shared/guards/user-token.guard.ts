import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokensService } from 'src/app/shared/services/tokens.service';

@Injectable({
  providedIn: 'root'
})
export class UserTokenGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokensService: TokensService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if(this.tokensService.userToken != '')
      return true;
    
    this.router.navigate(['/auth'])
    return false;
  }
}
