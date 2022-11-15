import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { ResponsiveService } from "src/app/shared/services/responsive.service";

import { ResponsiveComponent } from "../../../responsive-component/responsive-component";

@Component({
  selector: "app-custom-table-body",
  templateUrl: "./custom-table-body.component.html",
  styleUrls: ["./custom-table-body.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTableBodyComponent extends ResponsiveComponent {
  @Input() data: any[] = [];
  @Input() cols: ICol[] = [];

  protected selectedData: any;
  @Output() onSelection = new EventEmitter<any | undefined>();

  @Input() chooseMode: boolean = false;
  @Output() onChoose = new EventEmitter<any | undefined>();

  constructor(responsiveService: ResponsiveService) {
    super(responsiveService);
  }
}
