import { ChangeDetectionStrategy, Component, OnDestroy, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { OverlayPanel } from "primeng/overlaypanel";
import { Subscription } from "rxjs";

@Component({
  selector: "app-nav-bar-popup",
  template: `
    <button
      pButton
      icon="bi bi-list"
      (click)="navbar.toggle($event)"
      class="p-button-sm p-button-secondary p-button-outlined"
    ></button>

    <p-overlayPanel #navbar>
      <app-nav-bar class="w-screen"></app-nav-bar>
    </p-overlayPanel>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarPopupComponent implements OnDestroy {
  @ViewChild('navbar') navbar?: OverlayPanel;
  private routeSub: Subscription;

  constructor(router: Router) {
    this.routeSub = router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) this.navbar?.hide();
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
