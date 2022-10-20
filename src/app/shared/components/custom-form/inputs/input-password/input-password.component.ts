import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-input-password",
  template: `
    <div class="field">
      <span class="p-float-label">
        <p-password
          [feedback]="false"
          [inputId]="inputId"
          [formControl]="control"
          styleClass="w-full"
          inputStyleClass="w-full"
        ></p-password>
        <label [for]="inputId">{{ label }}</label>
      </span>
      <small
        *ngIf="hint != ''"
        [id]="inputId + '-help'"
        class="block text-color-secondary"
        >{{ hint }}</small
      >
    </div>
  `,
  styles: [],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputPasswordComponent {
  @Input() hint: string = "";

  @Input() label: string = "";
  @Input() control!: FormControl;

  protected inputId: string;

  constructor() {
    this.inputId = `input-${this.label.toLocaleLowerCase()}-${Math.floor(
      Math.random() * 100
    )}`;
  }
}
