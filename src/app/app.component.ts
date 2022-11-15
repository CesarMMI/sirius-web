import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <router-outlet></router-outlet>
    <p-toast
      position="bottom-right"
      [breakpoints]="{
        '920px': { width: '95%', right: '0', left: '0', margin: '0 auto' }
      }"
    ></p-toast>
  `,
  styles: [],
})
export class AppComponent {}
