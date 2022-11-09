import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent, combineLatest, Observable } from 'rxjs';
import { takeUntil, debounceTime, map } from 'rxjs/operators';

export interface IResponsiveObject {
  width: number | null,
  breakpoint: string | null,
}

@Injectable()
export class ResponsiveService implements OnDestroy {
  private _unsubscriber$: Subject<any> = new Subject();

  private screenWidth$ = new BehaviorSubject<number | null>(null);
  private mediaBreakpoint$ = new BehaviorSubject<string | null>(null);

  public responsiveObject: Observable<IResponsiveObject> = combineLatest([
    this.screenWidth$,
    this.mediaBreakpoint$,
  ]).pipe(
    map(([screenWidth$, mediaBreakpoint$]) => {
      return {
        width: screenWidth$,
        breakpoint: mediaBreakpoint$
      }
    })
  )

  constructor() {
    this.init();
  }

  init() {
    this._setScreenWidth(window.innerWidth);
    this._setMediaBreakpoint(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(500),
        takeUntil(this._unsubscriber$)
      ).subscribe((evt: any) => {
        this._setScreenWidth(evt.target.innerWidth);
        this._setMediaBreakpoint(evt.target.innerWidth);
      });
  }

  ngOnDestroy() {
    this._unsubscriber$.next(null);
    this._unsubscriber$.complete();
  }

  private _setScreenWidth(width: number): void {
    this.screenWidth$.next(width);
  }

  private _setMediaBreakpoint(width: number): void {
    if (width < 576) {
      this.mediaBreakpoint$.next('xs');
    } else if (width >= 576 && width < 768) {
      this.mediaBreakpoint$.next('sm');
    } else if (width >= 768 && width < 992) {
      this.mediaBreakpoint$.next('md');
    } else if (width >= 992 && width < 1200) {
      this.mediaBreakpoint$.next('lg');
    } else if (width >= 1200 && width < 1600) {
      this.mediaBreakpoint$.next('xl');
    } else {
      this.mediaBreakpoint$.next('xxl');
    }
  }

}
