import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest } from "rxjs";
import { IPagination } from "./models/pagination";

@Injectable({
    providedIn: "root",
})
export class PaginationService {
    constructor() {}

    private paginationSub$ = new BehaviorSubject<IPagination>({
        page: 1,
        quantityPerPage: 10,
    });

    public get pagination$() {
        return this.paginationSub$.asObservable();
    }
    public setPagination({
        page,
        quantityPerPage,
    }: {
        page?: number;
        quantityPerPage?: number;
    }) {
        this.paginationSub$.next({
            page: page || this.paginationSub$.value.page,
            quantityPerPage:
                quantityPerPage || this.paginationSub$.value.quantityPerPage,
        });
    }
}
