import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <div class="w-full h-full flex p-2 gap-2 surface-50">
      <app-nav-bar></app-nav-bar>
      <div class="flex-1 flex flex-column gap-2">
        <app-home-wrapper [padding]="2">
          <app-empresa-bar></app-empresa-bar>
        </app-home-wrapper>
        <app-home-wrapper class="flex-1">
          <router-outlet></router-outlet>
        </app-home-wrapper>
      </div>
    </div>
  `,
  styles: [],
})
export class HomeComponent {
  constructor() {}
}
