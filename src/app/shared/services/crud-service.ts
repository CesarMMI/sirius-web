import { HttpClient } from "@angular/common/http";
import { MessageService } from "primeng/api";
import {
    catchError,
    combineLatest,
    delay,
    map,
    Observable,
    switchMap,
    throwError,
} from "rxjs";

import { ITableData } from "../components/custom-table/models/TableData";
import { FilterService } from "./http-params/filter.service";
import { IFilter } from "./http-params/models/filter";
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

    get(
        page?: number,
        quantityPerPage?: number,
        filter?: IFilter
    ): Observable<any> {
        return combineLatest([
            this.pagination.pagination$,
            this.filter.filter$,
        ]).pipe(
            switchMap(([pagination, filter]) => {
                console.log('pagination', pagination)
                console.log('filter', filter)
                return this.http
                    .get<ITableData<T>>(
                        `${this.API_URL}/${this.apiEndPoints.getAll.endPoint}`,
                        {
                            params: {
                                pag: pagination.page,
                                qtdItensPag: pagination.quantityPerPage,
                                orderby: "id",
                                desc: false,
                            },
                        }
                    )
                    .pipe(
                        // delay(500),
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
        return this.pagination.pagination$.pipe();
        // return this.http
        //     .get<ITableData<T>>(
        //         `${this.API_URL}/${this.apiEndPoints.getAll.endPoint}`,
        //         {
        //             params: {
        //                 pag: this.pagination.page$,
        //                 qtdItensPag: this.pagination.quantity$,
        //                 orderby: "id",
        //                 desc: false,
        //             }
        //         }
        //     )
        //     .pipe(
        //         // delay(500),
        //         catchError((err) => {
        //             this.message.add({
        //                 severity: "error",
        //                 summary:
        //                     err.error.erro ||
        //                     err.error.error ||
        //                     err.error ||
        //                     "Erro Desconhecido. Caso persista, entre em contato.",
        //                 detail: `${err.statusText || "Erro"} ${err.status}`,
        //             });
        //             return throwError(() => new Error(err));
        //         }),
        //         map((response: any) => {
        //             return {
        //                 payload:
        //                     response[this.apiEndPoints.getAll.response.payload],
        //                 pageCount:
        //                     response[
        //                         this.apiEndPoints.getAll.response.pageCount
        //                     ],
        //             };
        //         })
        //     );
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
}
