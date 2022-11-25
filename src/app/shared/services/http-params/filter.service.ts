import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFilter } from './models/filter';

const filterInitialValue =  {
  order: {
      orderBy: 'id',
      desc: false
  }
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor() {}

  private filterSub$ = new BehaviorSubject<IFilter>(filterInitialValue);

  public get filter$() {
      return this.filterSub$.asObservable();
  }
  public setFilter(filter: IFilter) {
      this.filterSub$.next(filter);
  }
  public clearFilter() {
    this.filterSub$.next(filterInitialValue);
  }
}
