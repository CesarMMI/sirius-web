import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-input-cpf-cnpj",
  template: `
    <div class="field">
      <span class="p-float-label">
        <p-inputMask
          [unmask]="true"
          [inputId]="inputId"
          styleClass="w-full"
          [mask]="isCnpj ? '99.999.999/9999-99' : '999.999.999-99'"
          [formControl]="control"
        ></p-inputMask>
        <label [for]="inputId">{{ label }}</label>
      </span>
    </div>
  `,
  styles: [],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputCpfCnpjComponent {
  @Input() label: string = "";
  @Input() control!: FormControl;

  @Input() isCnpj: boolean = false;

  protected inputId: string;

  constructor() {
    this.inputId = `input-${this.label.toLocaleLowerCase()}-${Math.floor(
      Math.random() * 100
    )}`;
  }
}
