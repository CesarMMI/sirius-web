import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPageEvent } from 'src/app/shared/components/custom-table/models/PageEvent';

@Component({
  selector: 'app-custom-table-paginator',
  template: `
    <p-paginator [rows]="rows" [totalRecords]="pageTotal * rows" [rowsPerPageOptions]="[10,20,30]" (onPageChange)="onPagination.emit($event)"></p-paginator>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTablePaginatorComponent {
  @Input() pageTotal: number = 0;
  @Input() rows: number = 10;

  @Output() onPagination = new EventEmitter<IPageEvent>();
  constructor() { }
}
