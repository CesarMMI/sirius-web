import { Component } from "@angular/core";
import { combineLatest, map, Observable } from "rxjs";
import { IResponsiveObject, ResponsiveService } from "src/app/shared/services/responsive.service";

@Component({
  selector: "app-home",
  template: `
    <div class="h-full flex flex-column">
      <ng-container *ngIf="responsiveObject$ | async as responsiveObject">
        <div
          class="flex"
          [ngClass]="{
            'flex-wrap p-2 gap-2': responsiveObject.breakpoint == 'xs'
          }"
        >
          <app-empresa-bar class="w-12" *ngIf="responsiveObject.breakpoint != 'xs'"></app-empresa-bar>
          <app-logo class="w-10"></app-logo>
          <ng-container *ngIf="responsiveObject.width! < 768">
            <app-nav-bar-popup  class="ml-auto"></app-nav-bar-popup>
          </ng-container>
        </div>
        <div class="flex flex-1">
          <ng-container *ngIf="responsiveObject.width! > 768">
            <app-nav-bar class="w-2"></app-nav-bar>
          </ng-container>
          <div
            class="w-12 p-3 surface-200"
            [ngClass]="{
              'w-10': responsiveObject.width! > 768
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
  protected responsiveObject$: Observable<IResponsiveObject>;

  constructor(private responsiveService: ResponsiveService) {
    this.responsiveObject$ = responsiveService.responsiveObject;
  }
}
