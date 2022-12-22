import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: "app-input-currency-range",
    template: `
        <div class="field flex" id="field" (onfocus)="onFocus($event)">
            <span class="p-float-label w-6">
                <p-inputNumber
                    mode="currency" currency="BRL" locale="pt-BR"
                    (onFocus)="showPlaceholder = true"
                    (onBlur)="showPlaceholder = false"
                    [max]="maxControl.value - 1"
                    [inputId]="minInputId"
                    [formControl]="minControl"
                    class="w-full"
                    [placeholder]="showPlaceholder ? 'Mínimo' : ''"
                    [style]="{ width: '100%' }"
                    [inputStyle]="{ width: '100%' }"
                    inputStyleClass="border-noround-right"
                ></p-inputNumber>
                <label [for]="minInputId">{{ label }}</label>
            </span>
            <p-inputNumber
                mode="currency" currency="BRL" locale="pt-BR"
                (onFocus)="showPlaceholder = true"
                (onBlur)="showPlaceholder = false"
                [min]="minControl.value + 1"
                [inputId]="maxInputId"
                [formControl]="maxControl"
                class="w-6"
                [placeholder]="showPlaceholder ? 'Máximo' : ''"
                [style]="{ width: '100%' }"
                [inputStyle]="{ width: '100%' }"
                inputStyleClass="border-noround-left border-left-none"
            ></p-inputNumber>
        </div>
    `,
})
export class InputCurrencyRangeComponent implements OnInit {
    @Input() label: string = "";
    @Input() minControl!: FormControl;
    @Input() maxControl!: FormControl;

    protected maxInputId: string = "";
    protected minInputId: string = "";

    protected showPlaceholder: boolean = false;

    ngOnInit(): void {
        let inputId = `input-${this.label
            .toLocaleLowerCase()
            .replace(" ", "-")}-${Math.floor(Math.random() * 100)}`;
        this.maxInputId = inputId + "-max";
        this.minInputId = inputId + "-min";
    }

    protected onFocus(event: any) {
        console.log(event);
    }
}
