import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
  <div class="w-full flex justify-content-center align-items-center">
    <!-- <img src="assets/logo/logo.svg" class="w-2 mr-2"> -->
    <div class="select-none text-color ">
      <span class="font-bold text-4xl" style="font-family: serif;">Sirius</span>
      <span class="font-light text-xl opacity-70">Web</span>
    </div>
  </div>
  `,
  styles: [
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
