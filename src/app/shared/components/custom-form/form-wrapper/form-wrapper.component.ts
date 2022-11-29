import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { FormLockService } from "src/app/shared/services/form-lock.service";

@Component({
    selector: "app-form-wrapper",
    template: `
        <div
            [ngClass]="{
                'px-1 py-1': padding
            }"
            class="surface-0 border-round-lg"
        >
            <header
                *ngIf="title != ''" 
                [ngClass]="{
                    'mb-3': margin,
                    'px-1': !padding 
                }"    
                class="flex align-items-center">
                <span class="text-2xl text-color font-bold">{{
                    (isEdit ? "Editar " : "Adicionar ") + title
                }}</span>
                <button
                    pButton
                    *ngIf="isEdit && showLock"
                    [icon]="(isLocked$ | async) ? 'bi bi-lock' : 'bi bi-unlock'"
                    (click)="switchLock()"
                    class="p-button-sm p-button-text p-button-rounded"
                    [ngClass]="{
                        'p-button-secondary': (isLocked$ | async)
                    }"
                ></button>
                <button
                    pButton
                    [routerLink]="isEdit ? '../..' : '..'"
                    icon="pi pi-arrow-left"
                    class="ml-auto p-button-sm p-button-secondary p-button-text p-button-rounded"
                ></button>
            </header>
            <div
                [ngClass]="{
                    'mt-4': title === ''
                }"
            >
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormWrapperComponent implements OnInit, OnDestroy {
    @Input() title: string = "";

    @Input() margin: boolean = true;
    @Input() padding: boolean = true;

    protected isEdit?: boolean;

    @Input() isChild: boolean = false;
    
    @Output() lockEvent = new EventEmitter<boolean>();
    protected isLocked: boolean = true;

    @Input() showLock: boolean = true;
    // private lockSub: Subscription;

    protected isLocked$: Observable<Boolean>;

    constructor(
        activatedRoute: ActivatedRoute,
        private formLockService: FormLockService
    ) {
        // Check if is Edit page
        if (activatedRoute.snapshot.url.length > 0) {
            this.isEdit = activatedRoute.snapshot.url[0].toString() === "edit";
        } else {
            if (activatedRoute.parent) {
                this.isEdit =
                    activatedRoute.parent.snapshot.url[0].toString() === "edit";
            }
        }
        // Form Lock
        this.isLocked$ = formLockService.isLocked$();
    }

    ngOnInit(): void {}

    ngOnDestroy(): void {}

    protected setLock(isLocked: boolean) {
        this.formLockService.setLock(isLocked);
    }

    protected switchLock(): void {
        this.formLockService.switchLock();
    }
}
