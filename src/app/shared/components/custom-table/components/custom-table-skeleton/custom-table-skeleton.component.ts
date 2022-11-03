import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ICol } from "src/app/shared/components/custom-table/models/Col";

@Component({
  selector: "app-custom-table-skeleton",
  template: `
    <p-table
      [value]="numbers"
      responsiveLayout="scroll"
      class="flex-1"
      styleClass="p-datatable-sm"
    >
      <ng-template pTemplate="header">
        <tr>
          <th *ngFor="let col of cols">
            {{ col.header }}
          </th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-rowData>
        <tr>
          <td *ngFor="let col of cols"><p-skeleton></p-skeleton></td>
        </tr>
      </ng-template>
    </p-table>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTableSkeletonComponent {
  @Input() cols: ICol[] = [];
  protected numbers: number[];

  constructor() {
    this.numbers = Array.from(Array(Math.floor(Math.random() * 10)).keys());
  }
}
