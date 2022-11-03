import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-wrapper',
  template: `
    <div
      class="w-full h-full shadow-2 border-round-lg bg-white"
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
