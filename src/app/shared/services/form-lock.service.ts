import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, tap } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class FormLockService {
    constructor() {}

    private locked$ = new BehaviorSubject<boolean>(true);

    public switchLock() {
        this.locked$.next(!this.locked$.value);
    }

    public setLock(isLocked: boolean) {
        if (isLocked != this.locked$.value) this.locked$.next(isLocked);
    }

    public isLocked$(): Observable<boolean> {
        return this.locked$.asObservable();
    }
}
