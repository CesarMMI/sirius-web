import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-form-wrapper",
  template: `
    <div class="px-2 py-2 surface-0 border-round-lg">
      <header class="flex justify-content-between align-items-center mb-3">
        <span class="text-3xl text-color font-bold">{{ (isEdit ? 'Editar ' : 'Adicionar ') + title }}</span>
        <button
          pButton
          [routerLink]="isEdit ? '../..' : '..'"
          icon="pi pi-arrow-left"
          class="p-button-sm p-button-secondary p-button-text p-button-rounded"
        ></button>
      </header>
      <div>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormWrapperComponent implements OnInit {
  @Input() title: string = "";
  protected isEdit: boolean;

  constructor(activatedRoute: ActivatedRoute) {
    this.isEdit = activatedRoute.snapshot.url[0].toString() === "edit";
  }

  ngOnInit(): void { }
}
