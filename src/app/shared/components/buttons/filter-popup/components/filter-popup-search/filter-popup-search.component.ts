import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from "@angular/core";
import { ICol } from "src/app/shared/components/custom-table/models/Col";

@Component({
    selector: "app-filter-popup-search",
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
    styleUrls: ["./filter-popup-search.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterPopupSearchComponent {
    @Input() object!: {
        field: string;
        value: string;
    };
    @Input() options: ICol[] = [];

    constructor() {}
}
