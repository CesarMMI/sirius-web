import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <div class="h-full flex flex-column">
      <div class="flex pt-2">
        <app-logo class="w-2"></app-logo>
        <app-empresa-bar class="w-10"></app-empresa-bar>
      </div>
      <div class="flex flex-1">
        <app-nav-bar class="w-2"></app-nav-bar>
        <div class="w-10 p-3 surface-200 " style="border-top-left-radius: 0.75rem;">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class HomeComponent {
  constructor() {}
}
