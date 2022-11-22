import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, combineLatest, delay, switchMap, take } from "rxjs";
import { ITableData } from "../components/custom-table/models/TableData";

import { PaginationService } from "./pagination.service";

export interface IApiEndPoints {
    getAll: {
        endPoint: string;
        response: {
            payload: string;
            pageCount: string;
        };
    };
    getById: string;
    post: string;
    put: string;
    delete: string;
}

export class CrudService<T> {
    constructor(
        protected http: HttpClient,
        protected pagination: PaginationService,
        private API_URL: string,
        private apiEndPoints: IApiEndPoints
    ) {
        pagination.setPage(1);
        this.refresh();
    }

    private dataSub$ = new BehaviorSubject<ITableData<T>>({
        data: [],
        pageTotal: 0,
    });
    public get data$() {
        return this.dataSub$.asObservable();
    }

    private selectedDataSub$ = new BehaviorSubject<T | null>(null);
    public get selectedData$() {
        return this.selectedDataSub$.asObservable();
    }
    public setSelectedData(data: T) {
        this.selectedDataSub$.next(data);
    }

    refresh(): void {
        combineLatest([this.pagination.page$, this.pagination.quantity$])
            .pipe(
                switchMap((value) => {
                    return this.get(1, 10).pipe(take(1));
                })
            )
            .subscribe((value: any) => {
                this.dataSub$.next({
                    data: value[this.apiEndPoints.getAll.response.payload],
                    pageTotal:
                        value[this.apiEndPoints.getAll.response.pageCount],
                });
            });
    }

    get(page: number, quantityPerPage: number) {
        return this.http
            .get(`${this.API_URL}/${this.apiEndPoints.getAll.endPoint}`, {
                params: {
                    pag: page,
                    qtdItensPag: quantityPerPage,
                },
            })
            .pipe(delay(500));
    }

    getById(id: number) {
        return this.http.get(
            `${this.API_URL}/${this.apiEndPoints.getById}/${id}`
        );
    }

    create(subject: any) {
        return this.http.post(
            `${this.API_URL}/${this.apiEndPoints.post}`,
            subject
        );
    }

    update(subject: any) {
        return this.http.put(
            `${this.API_URL}/${this.apiEndPoints.put}`,
            subject
        );
    }
}
