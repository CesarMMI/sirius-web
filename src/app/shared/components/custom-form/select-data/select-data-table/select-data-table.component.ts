import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { IFilter } from "src/app/shared/services/http-params/models/filter";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { ICol } from "../../../custom-table/models/Col";
import { IPageEvent } from "../../../custom-table/models/PageEvent";

import { ITableData } from "../../../custom-table/models/TableData";
import { SelectDataService } from "../select-data.service";

@Component({
    selector: "app-select-data-table",
    templateUrl: "./select-data-table.component.html",
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectDataTableComponent {
    @Input() data!: ITableData<any> | null;
    @Input() cols: ICol[] = [];

    protected selectedData: any;

    @Output() getEvent = new EventEmitter<any>();
    @Output() chooseEvent = new EventEmitter<any>();

    constructor(
        selectDataService: SelectDataService,
        private filterService: FilterService,
        private paginationService: PaginationService
    ) {}

    get() {
        this.getEvent.emit();
    }

    onSelect(event: any) {
        this.selectedData = event;
    }

    onPagination(event: IPageEvent) {
        this.paginationService.setPagination({
            page: event.page + 1,
            quantityPerPage: event.rows,
        });
        this.get();
    }
    
    onFilter(event: IFilter) {
        this.filterService.setFilter(event);
        this.get();
    }

    onChoose(event: any) {
        this.chooseEvent.emit(event);
    }
}
