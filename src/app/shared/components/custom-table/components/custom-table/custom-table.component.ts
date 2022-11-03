import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ICol } from 'src/app/shared/components/custom-table/models/Col';
import { ITableData } from 'src/app/shared/components/custom-table/models/TableData';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTableComponent {
  @Input() data: any[] = [];
  @Input() cols: ICol[] = [];
  
  constructor() { }

}
