import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: "app-input-text-area",
    template: `
        <div class="field">
            <span class="p-float-label">
                <textarea
                    pInputTextarea
                    type="text"
                    [rows]="2"
                    [id]="inputId"
                    class="w-full"
                    [formControl]="control"
                    [style]="{ width: '100%' }"
                ></textarea>
                <label [for]="inputId">{{ label }}</label>
            </span>
        </div>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextAreaComponent {
    @Input() label: string = "";
    @Input() control!: FormControl;

    protected inputId: string;

    constructor() {
        this.inputId = `input-${this.label.toLocaleLowerCase()}-${Math.floor(
            Math.random() * 100
        )}`;
    }
}
