import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ICol } from 'src/app/shared/components/custom-table/models/Col';
import { IPageEvent } from 'src/app/shared/components/custom-table/models/PageEvent';
import { ITableData } from 'src/app/shared/components/custom-table/models/TableData';

@Component({
  selector: 'app-custom-table',
  template: `
    <!-- Header -->
    <app-custom-table-header [title]="title">
      <app-crud-buttonset></app-crud-buttonset>
    </app-custom-table-header>
    <!-- Table -->
    <app-custom-table-body [cols]="cols" [data]="data"> </app-custom-table-body>
    <!-- Paginator -->
    <app-custom-table-paginator
      [total]="total"
      (onPagination)="onPagination($event)"
    ></app-custom-table-paginator>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() total: number = 0;

  @Input() cols: ICol[] = [];
  @Input() title: string = '';


  constructor() {
  }
  ngOnInit(): void {

  }

  onPagination(event: IPageEvent): void {

  }

}
