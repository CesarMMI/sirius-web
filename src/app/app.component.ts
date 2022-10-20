import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <p-toast position="bottom-right" key="global"></p-toast>
  `,
  styles: []
})
export class AppComponent {
  title = 'softclever-nfe';
}
