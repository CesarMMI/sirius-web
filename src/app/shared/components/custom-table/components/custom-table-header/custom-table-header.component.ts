import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-table-header',
  template: `
    <ng-container *ngIf="title != ''">
      <div class="px-2 pt-2 pb-1 bg-white flex align-items-center border-round-top-lg surface-border border-bottom-1">
        <span class="text-3xl text-color font-bold">{{ title }}</span>
        <div class="ml-auto"><ng-content></ng-content></div>
      </div>
    </ng-container>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTableHeaderComponent {
  @Input() title: string = '';

  constructor() { }
}
