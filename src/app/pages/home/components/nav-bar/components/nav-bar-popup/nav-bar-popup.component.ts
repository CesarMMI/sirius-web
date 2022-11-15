import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { OverlayPanel } from "primeng/overlaypanel";
import { Subscription } from "rxjs";

@Component({
  selector: "app-nav-bar-popup",
  template: `
    <button
      pButton
      icon="bi bi-list"
      (click)="navbarOp.toggle($event)"
      class="p-button-sm p-button-text p-button-plain"
    ></button>

    <p-overlayPanel #navbarOp>
      <app-nav-bar></app-nav-bar>
    </p-overlayPanel>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarPopupComponent implements OnDestroy {
  private routerSub: Subscription;
  @ViewChild("navbarOp", { static: true }) navbarOp!: OverlayPanel;

  constructor(router: Router) {
    this.routerSub = router.events.subscribe(() => this.navbarOp.hide());
  }
  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }
}
