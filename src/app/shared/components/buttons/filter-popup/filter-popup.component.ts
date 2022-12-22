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

import { ICol } from "../../custom-table/models/Col";
import { AdvancedFilterForm } from "../../models/advanced-filter-form/advanced-filter-form";
import { FilterAdvancedService } from "./filter-advanced/services/filter-advanced.service";

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
                    <span
                        class="mt-3 text-primary-500 text-sm select-none cursor-pointer"
                        (click)="displayAdvanced = true; filtroOp.hide()"
                        >Filtros avançados</span
                    >
                </div>
            </ng-template>
        </p-overlayPanel>

        <app-filter-advanced
            [(display)]="displayAdvanced"
            (onFilter)="displayAdvanced = false; click()"
            [currTagert]="advancedFilterForm"
        ></app-filter-advanced>

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
    constructor(protected filterAdvancedService: FilterAdvancedService) {}

    @ViewChild("filtroOp", { static: true }) filtroOp!: OverlayPanel;

    @Input() orderOptions: ICol[] = [];
    @Input() filterOptions: ICol[] = [];
    @Output() onFilter = new EventEmitter<any>();

    protected isFiltered: boolean = false;

    // Advanced Filters
    @Input() advancedFilterForm!: Type<AdvancedFilterForm>;
    protected displayAdvanced: boolean = false;

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

    protected click(advanced: boolean = false): void {
        this.filtroOp.hide();
        this.isFiltered = true;

        if (advanced) {
            this.onFilter.emit(this.filterObj);
        } else {
            this.onFilter.emit(this.filterAdvancedService.getFiltersValue());
        }
    }
}
