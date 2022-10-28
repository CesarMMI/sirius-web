import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  // Data
  @Input() cols!: ICol[];
  @Input() data: ITableData = { data: [], totalPages: 0 };
  @Output() pageEvent = new EventEmitter<any>();
  // Header
  @Input() title: string = "";
  // Choose
  @Input() showChooseButton: boolean = false;
  @Output() chooseEvent = new EventEmitter<any>();
  // Select
  @Output() selectEvent = new EventEmitter<any>();
  protected selectedData: any;

  constructor() {}
}
