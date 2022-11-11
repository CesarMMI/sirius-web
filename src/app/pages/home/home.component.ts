import { Component } from "@angular/core";
import { Observable } from "rxjs";
import {
  IResponsiveObject,
  ResponsiveService,
} from "src/app/shared/services/responsive.service";

@Component({
  selector: "app-home",
  template: `
    <ng-container *ngIf="responsiveObject$ | async as responsiveObject">
      <div class="flex flex-wrap pt-2">
        <span class="fixed top-0 left-0 bg-red-700 p-2">{{
          responsiveObject.breakpoint
        }}</span>
        <app-empresa-bar
          [ngClass]="{
            'w-12 h-min mb-2 flex-order-0':
              responsiveObject.breakpoint == 'xs' ||
              responsiveObject.breakpoint == 'sm',
            'w-10 flex-order-1 mb-2': responsiveObject.breakpoint == 'md'
          }"
          class="flex align-items-center"
        ></app-empresa-bar>
        <app-logo
          [ngClass]="{
            'w-10 h-min mb-2 flex-order-1':
              responsiveObject.breakpoint == 'xs' ||
              responsiveObject.breakpoint == 'sm',
            'w-1 flex-order-0 mb-2': responsiveObject.breakpoint == 'md'
          }"
        ></app-logo>
        <app-nav-bar-popup
          *ngIf="responsiveObject.width! < 992"
          class="w-1 mb-2 flex-order-2"
        ></app-nav-bar-popup>
        <div class="w-12 surface-200 p-2 border-round-xl flex-order-3">
          <router-outlet></router-outlet>
        </div>
      </div>
    </ng-container>
  `,
  styles: [],
})
export class HomeComponent {
  protected responsiveObject$: Observable<IResponsiveObject>;

  constructor(private responsiveService: ResponsiveService) {
    this.responsiveObject$ = responsiveService.responsiveObject$;
  }
}
