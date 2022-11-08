import { Component } from "@angular/core";
import { combineLatest, map, Observable } from "rxjs";
import { ResponsiveService } from "src/app/shared/services/responsive.service";

@Component({
  selector: "app-home",
  template: `
    <div class="h-full flex flex-column">
      <ng-container *ngIf="responsive$ | async as responsive">
        <div
          class="flex"
          [ngClass]="{
            'flex-wrap flex-row-reverse align-items-end gap-2 p-2':
              responsive.breakpoint == 'xs'
          }"
        >
          <ng-container *ngIf="responsive.width! < 768">
            <app-nav-bar-popup
            ></app-nav-bar-popup>
          </ng-container>
          <app-logo
            [ngClass]="{
              'w-10': responsive.breakpoint == 'xs'
            }"
            class="w-2"
          ></app-logo>
          <app-empresa-bar
            class="w-12"
          ></app-empresa-bar>
        </div>
        <div class="flex flex-1">
        <ng-container *ngIf="responsive.width! > 768">
            <app-nav-bar class="w-2"></app-nav-bar>
          </ng-container>
          <div
            class="w-12 p-3 surface-200"
            [ngClass]="{
              'w-10':responsive.width! > 768
            }"
            style="border-top-left-radius: 0.75rem;"
          >
            <router-outlet></router-outlet>
          </div>
        </div>
      </ng-container>
    </div>
  `,
  styles: [],
})
export class HomeComponent {
  protected responsive$: Observable<{
    width: number | null;
    breakpoint: string | null;
  }>;

  constructor(private responsiveService: ResponsiveService) {
    this.responsive$ = combineLatest([
      responsiveService.screenWidth$,
      responsiveService.mediaBreakpoint$,
    ]).pipe(
      map(([width, breakpoint]: [number | null, string | null]) => {
        return {
          width,
          breakpoint,
        };
      })
    );
  }
}
