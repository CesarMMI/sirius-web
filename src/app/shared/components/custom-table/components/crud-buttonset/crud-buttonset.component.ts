import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { ConfirmationService } from "primeng/api";

@Component({
  selector: "app-crud-buttonset",
  template: `
    <div>
      <button
        pButton
        icon="pi pi-plus"
        [routerLink]="'add'"
        class="p-button-text p-button-rounded p-button-success"
      ></button>
      <button
        pButton
        icon="pi pi-pencil"
        [disabled]="!isSelected"
        [routerLink]="'edit/' + targetId"
        [class]="isSelected ? 'p-button-info' : 'p-button-secondary'"
        class="p-button-text p-button-rounded"
      ></button>
      <button
        pButton
        icon="pi pi-trash"
        [disabled]="!isSelected"
        (click)="confirm($event)"
        [class]="isSelected ? 'p-button-danger' : 'p-button-secondary'"
        class="p-button-text p-button-rounded"
      ></button>
    </div>

    <p-confirmPopup></p-confirmPopup>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrudButtonsetComponent {
  @Input() targetId?: number;
  @Input() message: string = "";
  @Input() isSelected: boolean = false;

  @Output() deleteEvent = new EventEmitter();

  constructor(private confirmationService: ConfirmationService) {}

  confirm(event: Event): void {
    this.confirmationService.confirm({
      target: event.target!,
      message: this.message,
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Sim",
      rejectLabel: "Não",
      accept: () => this.deleteEvent.emit()
    });
  }
}
