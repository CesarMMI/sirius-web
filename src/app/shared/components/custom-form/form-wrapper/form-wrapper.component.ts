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
    <header class="flex justify-content-between align-items-center">
      <span class="text-3xl text-color font-bold">{{ title }}</span>
      <button
        pButton
        [routerLink]="isEdit ? '../..' : '..'"
        icon="pi pi-arrow-left"
        class="p-button-sm p-button-secondary p-button-text p-button-rounded"
      ></button>
    </header>
    <div class="pt-4">
      <ng-content></ng-content>
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
    console.log(this.isEdit);
  }

  ngOnInit(): void {}
}
