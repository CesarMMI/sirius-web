import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokensService {

  constructor() { }

  private userToken$ = new BehaviorSubject<string>(localStorage.getItem('userToken') || '');
  private token$ = new BehaviorSubject<string>('');

  public get userToken(): string {
    return this.userToken$.value;
  }
  public set userToken(userToken: string) {
    localStorage.setItem('userToken', userToken);
    this.userToken$.next(userToken);
  }

  public get token(): string {
    return this.token$.value;
  }
  public set token(token: string) {
    this.token$.next(token)
  }

}
