import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICol } from 'src/app/shared/components/custom-table/models/Col';

@Component({
  selector: 'app-custom-table-body',
  templateUrl: './custom-table-body.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTableBodyComponent {
  @Input() data: any[] = [];
  @Input() cols: ICol[] = [];

  protected selectedData: any;
  constructor() { }


}
