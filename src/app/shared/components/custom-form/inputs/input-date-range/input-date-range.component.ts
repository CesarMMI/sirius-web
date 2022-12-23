import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: "app-input-date-range",
    template: ` <div class="field">
        <span class="p-float-label">
            <p-calendar
                class="w-full"
                [inputId]="inputId"
                [formControl]="control"
                dateFormat="dd/mm/yy"
                appendTo="body"
                selectionMode="range"
                [readonlyInput]="true"
                [style]="{ width: '100%' }"
            ></p-calendar>
            <label [for]="inputId">{{ label }}</label>
        </span>
    </div>`,
})
export class InputDateRangeComponent {
    @Input() label: string = "";
    @Input() control!: FormControl;

    protected inputId: string;

    constructor() {
        this.inputId = `input-${this.label.toLocaleLowerCase()}-${Math.floor(
            Math.random() * 100
        )}`;
    }
}
