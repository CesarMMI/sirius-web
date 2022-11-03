import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { Observable } from "rxjs";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { IPageEvent } from "src/app/shared/components/custom-table/models/PageEvent";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";

@Component({
  selector: "app-custom-table",
  templateUrl: './custom-table.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CustomTableComponent {
  constructor() {}

  // Header
  @Input() title: string = "";
  // Body
  @Input() data!: Observable<ITableData>;
  @Input() cols: ICol[] = [];
  // Footer
  @Output() pageEvent = new EventEmitter<IPageEvent>();
  @Input() totalPages: number = 1;
  protected rows = 10;

  protected onPageChange(event: IPageEvent): void {
  }
}
