import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { IPageEvent } from 'src/app/shared/components/custom-table/models/PageEvent';

@Component({
  selector: 'app-custom-table-wrapper',
  template: `
    <app-custom-table-header [title]="title">
      <ng-container *ngTemplateOutlet="headerButtons ? headerButtons : null"></ng-container>
    </app-custom-table-header>
    <ng-content></ng-content>
    <app-custom-table-paginator [pageTotal]="pageTotal" (onPagination)="onPagination.emit($event)"></app-custom-table-paginator>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTableWrapperComponent {
  @Input() title: string = '';
  @Input() pageTotal: number = 0;

  @Input() headerButtons?: TemplateRef<any>;

  @Output() onPagination = new EventEmitter<IPageEvent>();

  constructor() { }

  ngOnInit(): void {
  }

}
