import { Component } from "@angular/core";
import { combineLatest, map, Observable } from "rxjs";
import { ResponsiveComponent } from "src/app/shared/components/responsive-component/responsive-component";
import {
  IResponsive,
  ResponsiveService,
} from "src/app/shared/services/responsive.service";

@Component({
  selector: "app-home",
  template: `
    <ng-container *ngIf="responsive$ | async as responsive">
      <div class="w-screen h-screen flex flex-column">
        <div
          [ngClass]="{
            'flex-column-reverse gap-2': responsive.width < 768,
            'flex-row': responsive.width >= 768
          }"
          class="flex flex-wrap py-2"
        >
          <div
            [ngClass]="{
              'w-12 flex flex-wrap': responsive.width < 768,
              'w-2': responsive.width >= 768
            }"
          >
            <app-logo
              [ngClass]="{
                'w-10': responsive.width < 768,
                'w-12': responsive.width >= 768
              }"
            ></app-logo>
            <app-nav-bar-popup
              class="w-2"
              *ngIf="responsive.width < 768"
            ></app-nav-bar-popup>
          </div>
          <app-empresa-bar
            [ngClass]="{
              'w-12': responsive.width < 768,
              'w-10': responsive.width >= 768
            }"
          ></app-empresa-bar>
        </div>
        <div class="flex flex-wrap flex-1">
          <app-nav-bar
            *ngIf="responsive.width >= 768"
            class="w-2"
          ></app-nav-bar>
          <div
            [ngClass]="{
              'w-12 border-round-top-xl p-2': responsive.width < 768,
              'w-10 p-4': responsive.width >= 768
            }"
            [style]="
              responsive.width >= 768 ? 'border-top-left-radius: 0.5rem;' : ''
            "
            class="surface-ground"
          >
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </ng-container>
  `,
  styles: [],
})
export class HomeComponent extends ResponsiveComponent {
  constructor(responsiveService: ResponsiveService) {
    super(responsiveService);
  }
}
