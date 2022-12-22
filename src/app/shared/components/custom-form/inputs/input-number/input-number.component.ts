import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: "app-input-number",
  template: `
    <div class="field">
      <span class="p-float-label">
        <p-inputNumber
          [inputId]="inputId"
          [formControl]="control"
          class="w-full"
          [style]="{ width: '100%' }"
          [inputStyle]="{ width: '100%' }"
        ></p-inputNumber>
        <label [for]="inputId">{{ label }}</label>
      </span>
    </div>
  `,
  styles: [],
})
export class InputNumberComponent {
  @Input() label: string = "";
  @Input() control!: FormControl;

  protected inputId: string;

  constructor() {
    this.inputId = `input-${this.label.toLocaleLowerCase()}-${Math.floor(
      Math.random() * 100
    )}`;
  }
}
