import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduto } from 'src/app/pages/home/pages/produto/models/Produto';
import { ICol } from 'src/app/shared/components/custom-table/models/Col';

@Component({
  selector: 'app-custom-table-body',
  templateUrl: './custom-table-body.component.html',
  styleUrls: ['./custom-table-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTableBodyComponent {
  @Input() data: any[] = [];
  @Input() cols: ICol[] = [];

  protected selectedData: any;
  @Output() onSelection = new EventEmitter<IProduto | undefined>;

  constructor() { }


}
