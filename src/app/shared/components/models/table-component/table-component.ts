import { Type } from "@angular/core";
import { MessageService } from "primeng/api";
import { BehaviorSubject, first, Observable, shareReplay } from "rxjs";

import { CrudService } from "../../../services/crud-service";
import { FilterService } from "../../../services/http-params/filter.service";
import { PaginationService } from "../../../services/http-params/pagination.service";
import { ICol } from "../../custom-table/models/Col";
import { IPageEvent } from "../../custom-table/models/PageEvent";
import { ITableData } from "../../custom-table/models/TableData";
import { AdvancedFilterForm } from "../advanced-filter-form/advanced-filter-form";

export class TableComponent<T> {
    protected data$!: Observable<ITableData<T>>;

    protected selectedData: T | null = null;
    protected selectedData$ = new BehaviorSubject<T | null>(null);

    constructor(
        protected cols: ICol[],
        private deleteMessage: string,
        private crudService: CrudService<T>,
        protected filterService: FilterService,
        protected paginationService: PaginationService,
        protected messageService: MessageService,
    ) {
        this.get();
    }

    get() {
        this.data$ = this.crudService.get().pipe(first(), shareReplay());
    }

    onSelect(event: T | null) {
        this.selectedData = event;
        this.selectedData$.next(event ? event : null);
    }

    onPagination(event: IPageEvent) {
        this.paginationService.setPagination({
            page: event.page + 1,
            quantityPerPage: event.rows,
        });
        this.get();
    }

    onFilter(event: any) {
        this.filterService.setFilter(event);
        this.get();
    }

    onDelete(event: number) {
        this.crudService
            .delete(event)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.messageService.add({
                        severity: "success",
                        summary: this.deleteMessage,
                    });
                    this.filterService.clearFilter();
                },
                complete: () => {
                    this.get();
                },
            });
    }
}
