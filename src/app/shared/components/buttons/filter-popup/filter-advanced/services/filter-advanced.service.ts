import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class FilterAdvancedService {
    constructor() {}

    private currFilters$ = new BehaviorSubject<any>(undefined);

    public setFilters(text: any) {
        this.currFilters$.next(text);
    }

    public getFilters() {
        return this.currFilters$.asObservable();
    }

    public getFiltersValue() {
        return this.currFilters$.value;
    }
}
