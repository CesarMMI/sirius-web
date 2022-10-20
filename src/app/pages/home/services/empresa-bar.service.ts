import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaBarService {

  constructor() { }
  private empresa$ = new BehaviorSubject(null);

  public getSelectedEmpresa(): Observable<any> {
    debugger;
    return this.empresa$.asObservable();
  }

  public setSelectedEmpresa(empresa: any) {
    debugger;
    this.empresa$.next({...empresa})
  }
}
