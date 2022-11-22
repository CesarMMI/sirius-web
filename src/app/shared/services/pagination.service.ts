import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  // Page
  private pageSub$ = new BehaviorSubject<number>(1);
  public get page$() {
    return this.pageSub$.asObservable();
  }
  public setPage(page: number) {
    this.pageSub$.next(page);
  }

  // Quantity
  private quantitySub$ = new BehaviorSubject<number>(10);
  public get quantity$() {
    return this.quantitySub$.asObservable();
  }
  public setQuantity(quantity: number) {
    this.quantitySub$.next(quantity);
  }

}
