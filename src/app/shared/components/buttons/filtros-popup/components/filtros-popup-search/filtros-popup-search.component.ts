import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from "@angular/core";

@Component({
    selector: "app-filtros-popup-search",
    template: `
        <small class="text-color-secondary">Pesquisar</small>
        <div class="flex">
            <p-dropdown
                [options]="options"
                optionLabel="header"
                optionValue="field"
                [(ngModel)]="object.field"
            ></p-dropdown>
            <input
                pInputText
                type="text"
                placeholder="Começa com..."
                [(ngModel)]="object.value"
            />
        </div>
    `,
    styleUrls: ["./filtros-popup-search.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltrosPopupSearchComponent {
    @Input() object!: {
        field: string;
        value: string;
    };
    @Input() options: any;

    constructor() {}
}
