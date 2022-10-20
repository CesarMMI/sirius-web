import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-cep',
  template: `
    <div class="field">
      <span class="p-float-label">
        <p-inputMask
          [unmask]="true"
          [inputId]="inputId"
          styleClass="w-full"
          mask="99999-999"
          [formControl]="control"
        ></p-inputMask>
        <label [for]="inputId">{{ label }}</label>
      </span>
    </div>
  `,
  styles: [
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputCepComponent {
  @Input() label: string = "";
  @Input() control!: FormControl;

  protected inputId: string;

  constructor() {
    this.inputId = `input-${this.label.toLocaleLowerCase()}-${Math.floor(
      Math.random() * 100
    )}`;
  }
}
