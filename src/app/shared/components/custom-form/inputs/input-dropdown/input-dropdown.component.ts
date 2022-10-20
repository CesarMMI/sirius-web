import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { IDropdownItem } from "src/app/shared/components/custom-form/models/DropdownItem";

@Component({
  selector: "app-input-dropdown",
  template: `
    <div class="field">
      <span class="p-float-label">
        <p-dropdown 
          [inputId]="inputId"
          [formControl]="control"
          class="w-full"
          [style]="{ width: '100%' }"
          [options]="options"
          optionLabel="label"
          optionValue="value"
        ></p-dropdown >
        <label [for]="inputId">{{ label }}</label>
      </span>
    </div>
  `,
  styles: [],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDropdownComponent {
  @Input() label: string = "";
  @Input() control!: FormControl;
  @Input() options: IDropdownItem[] = []

  protected inputId: string;

  constructor() {
    this.inputId = `input-${this.label.toLocaleLowerCase()}-${Math.floor(
      Math.random() * 100
    )}`;
  }
}
