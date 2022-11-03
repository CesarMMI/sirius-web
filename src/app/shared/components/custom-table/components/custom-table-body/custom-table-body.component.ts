import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";

@Component({
  selector: "app-custom-table-body",
  template: `
    <!-- (onRowUnselect)="selectEvent.emit(null)"
    (onRowSelect)="selectEvent.emit($event.data)" -->
    <p-table
      [value]="data?.data || []"
      dataKey="id"
      selectionMode="single"
      [(selection)]="selectedData"
      responsiveLayout="scroll"
      class="flex-1"
      styleClass="p-datatable-sm"
    >
      <ng-template pTemplate="header">
        <tr>
          <th *ngFor="let col of cols">
            {{ col.header }}
          </th>
          <!-- <th *ngIf="showChooseButton"></th> -->
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-rowData>
        <tr [pSelectableRow]="rowData">
          <td *ngFor="let col of cols">
            {{
              col.pipe
                ? (rowData[col.field] | dynamic: col.pipe:col.pipeArgs || [])
                : rowData[col.field]
            }}
          </td>
          <!-- <td *ngIf="showChooseButton">
            <button
              pButton
              label="Selecionar"
              iconPos="right"
              icon="pi pi-angle-double-right"
              class="p-button-sm p-button-text"
              (click)="chooseEvent.emit(rowData)"
            ></button>
          </td> -->
        </tr>
      </ng-template>
    </p-table>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTableBodyComponent {
  @Input() data: ITableData | null = null;
  @Input() cols: ICol[] = [];

  protected selectedData: any;

  constructor() {}
}
