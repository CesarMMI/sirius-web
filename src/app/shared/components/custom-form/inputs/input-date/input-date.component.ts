import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: "app-input-date",
    template: ` <div class="field">
        <span class="p-float-label">
            <p-calendar
                class="w-full"
                [inputId]="inputId"
                [formControl]="control"
                dateFormat="dd-mm-yy"
                appendTo="body"
                [style]="{ width: '100%' }"
            ></p-calendar>
            <label [for]="inputId">{{ label }}</label>
        </span>
    </div>`,
    styles: [],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDateComponent {
    @Input() label: string = "";
    @Input() control!: FormControl;

    protected inputId: string;

    constructor() {
        this.inputId = `input-${this.label.toLocaleLowerCase()}-${Math.floor(
            Math.random() * 100
        )}`;
    }
}
