import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-table-header',
  template: `
    <ng-container *ngIf="title != ''">
  <div class="px-2 pt-2 surface-ground flex align-items-center">
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
