import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-popup',
  template: `
    <button
      pButton
      icon="bi bi-list"
      class="p-button-sm p-button-secondary p-button-outlined"
    ></button>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarPopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
