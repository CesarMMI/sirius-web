import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <div class="w-full h-full flex gap-2 p-2 surface-100">
      <app-navbar></app-navbar>
      <div
        class="surface-0 h-full shadow-1 border-round-md overflow-hidden flex-1 flex flex-column"
      >
        <div class="flex-1">
          <router-outlet></router-outlet>
        </div>
        <app-empresa-bar></app-empresa-bar>
      </div>
    </div>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
