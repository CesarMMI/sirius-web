import { MessageService } from "primeng/api";
import { BehaviorSubject, first, Observable, shareReplay } from "rxjs";
import { CrudService } from "../../services/crud-service";
import { FilterService } from "../../services/http-params/filter.service";
import { IFilter } from "../../services/http-params/models/filter";
import { PaginationService } from "../../services/http-params/pagination.service";
import { ICol } from "../custom-table/models/Col";
import { IPageEvent } from "../custom-table/models/PageEvent";
import { ITableData } from "../custom-table/models/TableData";

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
        protected messageService: MessageService
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

    onFilter(event: IFilter) {
        this.filterService.setFilter(event);
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
