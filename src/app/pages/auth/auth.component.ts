import { Component, OnInit } from "@angular/core";

@Component({
  template: `
    <div
      class="w-screen h-screen flex justify-content-center align-items-center"
    >
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AuthComponent {
  constructor() {}
}
