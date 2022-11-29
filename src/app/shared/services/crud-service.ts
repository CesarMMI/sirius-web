import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MessageService } from "primeng/api";
import {
    catchError,
    combineLatest,
    delay,
    first,
    map,
    Observable,
    switchMap,
    tap,
    throwError,
} from "rxjs";

import { ITableData } from "../components/custom-table/models/TableData";
import { FilterService } from "./http-params/filter.service";
import { IFilter } from "./http-params/models/filter";
import { IPagination } from "./http-params/models/pagination";
import { PaginationService } from "./http-params/pagination.service";

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
    private headers = new HttpHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
    });

    constructor(
        protected http: HttpClient,
        protected pagination: PaginationService,
        protected filter: FilterService,
        protected message: MessageService,
        private API_URL: string,
        private apiEndPoints: IApiEndPoints
    ) {
        pagination.setPagination({ page: 1 });
    }

    private genParams(pagination: IPagination, filter: IFilter) {
        let params: any = {
            pag: pagination.page,
            qtdItensPag: pagination.quantityPerPage,
            orderby: filter.order.orderBy,
            desc: filter.order.desc,
        };

        if (filter.search)
            Object.defineProperty(params, filter.search.field, {
                value: filter.search.value,
                writable: true,
                enumerable: true,
            });

        return params;
    }

    get(): Observable<ITableData<T>> {
        return combineLatest([
            this.pagination.pagination$,
            this.filter.filter$,
        ]).pipe(
            switchMap(([pagination, filter]) => {
                return this.http
                    .get<ITableData<T>>(
                        `${this.API_URL}/${this.apiEndPoints.getAll.endPoint}`,
                        { params: this.genParams(pagination, filter) }
                    )
                    .pipe(
                        delay(500),
                        catchError((err) => {
                            this.message.add({
                                severity: "error",
                                summary:
                                    err.error.erro ||
                                    err.error.error ||
                                    err.error ||
                                    "Erro Desconhecido. Caso persista, entre em contato.",
                                detail: `${err.statusText || "Erro"} ${
                                    err.status
                                }`,
                            });
                            return throwError(() => new Error(err));
                        }),
                        map((response: any) => {
                            return {
                                payload:
                                    response[
                                        this.apiEndPoints.getAll.response
                                            .payload
                                    ],
                                pageCount:
                                    response[
                                        this.apiEndPoints.getAll.response
                                            .pageCount
                                    ],
                            };
                        })
                    );
            })
        );
    }

    getById(id: number): Observable<T> {
        return this.http.get<T>(
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

    delete(id: number) {
        return this.http.delete(
            `${this.API_URL}/${this.apiEndPoints.delete}/${id}`,
            { headers: this.headers }
        );
    }
}
