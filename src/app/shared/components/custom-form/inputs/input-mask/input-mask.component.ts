import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: "app-input-mask",
    template: `
        <div class="field">
            <span class="p-float-label">
                <p-inputMask
                    [unmask]="true"
                    [inputId]="inputId"
                    styleClass="w-full"
                    [mask]="mask"
                    [formControl]="control"
                ></p-inputMask>
                <label [for]="inputId">{{ label }}</label>
            </span>
        </div>
    `,
    styles: [],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputMaskComponent {
    @Input() label: string = "";
    @Input() control!: FormControl;

    @Input() mask!: string;

    protected inputId: string;

    constructor() {
        this.inputId = `input-${this.label.toLocaleLowerCase()}-${Math.floor(
            Math.random() * 100
        )}`;
    }
}
