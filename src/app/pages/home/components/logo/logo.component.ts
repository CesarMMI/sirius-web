import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {
  IResponsive,
  ResponsiveService,
} from "src/app/shared/services/responsive.service";

@Component({
  selector: "app-logo",
  template: `
    <ng-container *ngIf="responsive$ | async as responsive">
      <div
        [ngClass]="{
          'px-4': responsive.width < 768,
          'text-center': responsive.width >= 768
        }"
        class="select-none text-color px-4"
      >
        <span class="font-bold text-4xl" style="font-family: serif;"
          >Sirius</span
        >
        <span class="font-light text-xl opacity-70">Web</span>
      </div>
    </ng-container>
  `,
  styles: [],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent {
  protected responsive$: Observable<IResponsive>;

  constructor(responsiveService: ResponsiveService) {
    this.responsive$ = responsiveService.responsive$;
  }
}
