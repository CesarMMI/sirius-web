import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ICol } from "../../../custom-table/models/Col";

import { IDropdownItem } from "../../models/DropdownItem";

@Component({
    selector: "app-input-order",
    template: `
        <div class="field">
            <span class="p-float-label flex">
                <p-dropdown
                    [inputId]="fieldInputId"
                    [formControl]="fieldControl"
                    class="flex-1"
                    [style]="{ width: '100%' }"
                    [options]="options"
                    appendTo="body"
                    optionLabel="header"
                    optionValue="field"
                    [autoDisplayFirst]="false"
                ></p-dropdown>
                <button
                    pButton
                    type="button"
                    [icon]="
                        isDesc ? 'bi bi-sort-up-alt' : 'bi bi-sort-down-alt'
                    "
                    class="p-button-secondary p-button-outlined"
                    (click)="onOrderClick()"
                ></button>
                <label [for]="fieldInputId">{{ label }}</label>
            </span>
        </div>
    `,
    styleUrls: ["./input-order.component.scss"],
})
export class InputOrderComponent implements OnInit {
    @Input() label: string = "";
    @Input() fieldControl!: FormControl;
    @Input() orderControl!: FormControl;
    @Input() options: ICol[] = [];

    protected fieldInputId: string = "";
    protected orderInputId: string = "";

    protected showPlaceholder: boolean = false;

    ngOnInit(): void {
        let inputId = `input-${this.label
            .toLocaleLowerCase()
            .replace(" ", "-")}-${Math.floor(Math.random() * 100)}`;
        this.fieldInputId = inputId + "-field";
        this.orderInputId = inputId + "-order";
    }

    protected get isDesc(): boolean {
        return this.orderControl.value;
    }

    protected onOrderClick() {
        this.orderControl.setValue(!this.isDesc);
    }
}
