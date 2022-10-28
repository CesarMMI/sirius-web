import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="w-screen h-screen">
    <router-outlet></router-outlet>
    </div>
    <p-toast position="bottom-right"></p-toast>
  `,
  styles: []
})
export class AppComponent {
}
