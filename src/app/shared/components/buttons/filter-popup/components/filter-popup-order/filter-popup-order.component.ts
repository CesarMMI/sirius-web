import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from "@angular/core";

@Component({
    selector: "app-filter-popup-order",
    template: `
        <small class="text-color-secondary">Ordenar</small>
        <div class="flex">
            <p-dropdown
                class="w-full"
                [style]="{ width: '100%' }"
                [options]="options"
                optionLabel="header"
                optionValue="field"
                [(ngModel)]="object.orderBy"
            ></p-dropdown>
            <button
                pButton
                (click)="object.desc = !object.desc"
                [icon]="object.desc ? 'bi bi-sort-up-alt' : 'bi bi-sort-down-alt'"
                class="p-button-secondary p-button-outlined"
            ></button>
        </div>
    `,
    styleUrls: ["./filter-popup-order.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterPopupOrderComponent {
    @Input() object: { orderBy: string; desc: boolean } = {
        orderBy: "id",
        desc: false,
    };
    @Input() options: any;

    constructor() {}
}
