import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { TokensService } from 'src/app/shared/services/tokens.service';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokensService: TokensService,
    private messageService: MessageService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if(this.tokensService.token != '')
      return true;
    
    this.messageService.add({
      severity: 'info',
      summary: 'Selecione uma empresa antes de continuar'
    })
    this.router.navigate(['/home/empresas']);
    return false;
  }
}
