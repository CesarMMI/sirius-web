import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITableData } from 'src/app/shared/components/custom-table/models/TableData';

@Component({
  selector: 'app-custom-table-header',
  template: `
  <ng-container *ngIf="title != ''">
    <header class="surface-ground px-3 pt-3 flex justify-content-between align-items-center">
      <span class="text-3xl text-color font-bold">{{ title }}</span>
    </header>
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
