import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    Type,
    ViewChild,
} from "@angular/core";
import { OverlayPanel } from "primeng/overlaypanel";
import { EmpresaAdvancedFilterComponent } from "src/app/pages/home/pages/empresa/pages/empresa-advanced-filter/empresa-advanced-filter.component";
import { IFilter } from "src/app/shared/services/http-params/models/filter";
import { AdvancedFilterForm } from "../../advanced-filter-form/advanced-filter-form";

import { ICol } from "../../custom-table/models/Col";

@Component({
    selector: "app-filter-popup",
    template: `
        <p-overlayPanel #filtroOp>
            <ng-template pTemplate>
                <div class="p-2">
                    <div class="gap-3 flex align-items-center">
                        <app-filter-popup-search
                            [options]="filterOptions"
                            [object]="filterObj.search"
                        ></app-filter-popup-search>
                        <app-filter-popup-order
                            [options]="orderOptions"
                            [object]="filterObj.order"
                        ></app-filter-popup-order>
                        <button
                            pButton
                            (click)="click()"
                            icon="bi bi-search"
                            class="p-button-text p-button-sm p-button-rounded align-self-end"
                        ></button>
                    </div>
                    <app-filter-advanced
                        class="mt-1" 
                        [currTagert]="advancedFilterForm"
                    ></app-filter-advanced>
                </div>
            </ng-template>
        </p-overlayPanel>

        <button
            pButton
            type="text"
            [icon]="isFiltered ? 'pi pi-filter-slash' : 'pi pi-filter'"
            [class]="isFiltered ? '' : 'p-button-plain'"
            class="p-button-sm p-button-text p-button-rounded"
            (click)="isFiltered ? clean() : filtroOp.toggle($event)"
        ></button>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterPopupComponent {
    @ViewChild("filtroOp", { static: true }) filtroOp!: OverlayPanel;

    @Output() onFilter = new EventEmitter<IFilter>();

    @Input() orderOptions: ICol[] = [];
    @Input() filterOptions: ICol[] = [];

    @Input() advancedFilterForm!: Type<AdvancedFilterForm>;

    protected isFiltered: boolean = false;

    constructor() {}

    protected filterObj = {
        order: {
            orderBy: "id",
            desc: false,
        },
        search: {
            field: "",
            value: "",
        },
    };

    protected clean(): void {
        this.isFiltered = false;
        this.onFilter.emit({ order: { desc: false, orderBy: "id" } });
    }

    protected click(): void {
        this.filtroOp.hide();
        this.isFiltered = true;
        this.onFilter.emit(this.filterObj);
    }
}
