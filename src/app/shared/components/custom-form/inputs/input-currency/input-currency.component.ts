import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-currency',
  template: `
    <div class="field">
      <span class="p-float-label">
        <p-inputNumber
          [inputId]="inputId"
          [formControl]="control"
          class="w-full"
          mode="currency" currency="BRL" locale="pt-BR"
          [style]="{ width: '100%' }"
          [inputStyle]="{ width: '100%' }"
        ></p-inputNumber>
        <label [for]="inputId">{{ label }}</label>
      </span>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputCurrencyComponent {
  @Input() label: string = "";
  @Input() control!: FormControl;

  protected inputId: string;

  constructor() {
    this.inputId = `input-${this.label.toLocaleLowerCase()}-${Math.floor(
      Math.random() * 100
    )}`;
  }
}
