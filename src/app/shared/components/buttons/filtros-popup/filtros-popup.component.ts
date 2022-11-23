import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild,
} from "@angular/core";
import { OverlayPanel } from "primeng/overlaypanel";
import { BehaviorSubject } from "rxjs";
import { ICol } from "../../custom-table/models/Col";

@Component({
    selector: "app-filtros-popup",
    template: `
        <p-overlayPanel #filtroOp>
            <ng-template pTemplate>
                <div class="gap-3 p-2 flex align-items-center">
                    <app-filtros-popup-search
                        [object]="filterObj.search"
                    ></app-filtros-popup-search>
                    <app-filtros-popup-order
                        [options]="orderOptions"
                        [object]="filterObj.order"
                    ></app-filtros-popup-order>
                    <button
                        pButton
                        (click)="click()"
                        icon="bi bi-search"
                        class="p-button-text p-button-sm p-button-rounded align-self-end"
                    ></button>
                </div>
            </ng-template>
        </p-overlayPanel>

        <button
            pButton
            type="text"
            icon="bi bi-funnel-fill"
            [class]="isFiltered ? '' : 'p-button-plain'"
            class="p-button-sm p-button-text p-button-rounded"
            (click)="isFiltered ? isFiltered = false : filtroOp.toggle($event)"
        ></button>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltrosPopupComponent {
    @ViewChild("filtroOp", { static: true }) filtroOp!: OverlayPanel;

    @Output() onFilter = new EventEmitter();
    @Input() orderOptions: ICol[] = [];

    protected isFiltered: boolean = false;

    constructor() {}

    protected filterObj = {
        order: {
            orderBy: "id",
            desc: false,
        },
        search: {
            field: "",
            value: ""
        }
    };

    protected click(): void {
        this.filtroOp.hide();
        this.isFiltered = true;
        this.onFilter.emit(this.filterObj);
    }
}
