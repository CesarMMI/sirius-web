import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-input-text",
  template: `
    <div class="field">
      <span class="p-float-label">
        <input
          pInputText
          type="text"
          [id]="inputId"
          class="w-full"
          [formControl]="control"
        />
        <label [for]="inputId">{{ label }}</label>
      </span>
    </div>
  `,
  styles: [],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextComponent {
  @Input() label: string = "";
  @Input() control!: FormControl;

  protected inputId: string;

  constructor() {
    this.inputId = `input-${this.label.toLocaleLowerCase()}-${Math.floor(
      Math.random() * 100
    )}`;
  }
}
