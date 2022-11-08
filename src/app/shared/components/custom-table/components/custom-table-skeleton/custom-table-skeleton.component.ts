import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ICol } from "src/app/shared/components/custom-table/models/Col";

@Component({
  selector: "app-custom-table-skeleton",
  template: `
    <p-table
      [value]="numbers"
      responsiveLayout="stack"
      class="flex-1"
      styleClass="p-datatable-sm"
    >
      <ng-template pTemplate="header">
        <tr>
          <th *ngFor="let col of cols">
            {{ col.header }}
          </th>
          <th *ngIf="chooseMode" style="width: 4rem;"></th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-rowData>
        <tr>
          <td *ngFor="let col of cols"><p-skeleton></p-skeleton></td>
          <td *ngIf="chooseMode" class="w-min">
            <button
              pButton
              [disabled]="true"
              label="Selecionar"
              iconPos="right"
              icon="bi bi-chevron-double-right"
              class="p-button-sm p-button-text p-button-secondary"
            ></button>
          </td>
        </tr>
      </ng-template>
    </p-table>
  `,
  styleUrls: ['./custom-table-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTableSkeletonComponent {
  @Input() cols: ICol[] = [];
  @Input() chooseMode: boolean = false
  protected numbers: number[];

  constructor() {
    this.numbers = Array.from(Array(Math.floor(Math.random() * 10)).keys());
  }
}
