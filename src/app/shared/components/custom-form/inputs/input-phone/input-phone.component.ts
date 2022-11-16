import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-input-phone",
  template: `
    <div class="field">
      <span class="p-float-label">
        <p-inputMask
          [unmask]="true"
          [inputId]="inputId"
          styleClass="w-full"
          [mask]="landline ? '(99) 9999-9999' : '(99) 99999-9999'"
          [formControl]="control"
        ></p-inputMask>
        <label [for]="inputId">{{ label }}</label>
      </span>
    </div>
  `,
  styles: [],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputPhoneComponent {
  @Input() label: string = "";
  @Input() control!: FormControl;

  @Input() landline: boolean = false;

  protected inputId: string;

  constructor() {
    this.inputId = `input-${this.label.toLocaleLowerCase()}-${Math.floor(
      Math.random() * 100
    )}`;
  }
}
