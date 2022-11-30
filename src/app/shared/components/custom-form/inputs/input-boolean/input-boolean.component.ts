import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: "app-input-boolean",
    template: `
        <div class="field">
            <p-toggleButton
                [inputId]="inputId"
                styleClass="w-full"
                [formControl]="control"
                onIcon="pi pi-check"
                offIcon="pi pi-times"
                [onLabel]="label"
                [offLabel]="label"
            ></p-toggleButton>
        </div>
    `,
    styles: [],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputBooleanComponent {
    @Input() label: string = "";
    @Input() control!: FormControl;

    protected inputId: string;

    constructor() {
        this.inputId = `input-${this.label.toLocaleLowerCase()}-${Math.floor(
            Math.random() * 100
        )}`;
    }
}
