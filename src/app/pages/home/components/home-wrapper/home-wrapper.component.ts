import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-wrapper',
  template: `
    <div
      class="w-full h-full shadow-2 border-round-lg"
      [class]="'p-' + padding"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeWrapperComponent {
  @Input() padding: number = 0;

  constructor() { }
}
