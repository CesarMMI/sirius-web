import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { MessageService } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { Observable } from "rxjs";
import { CrudService } from "src/app/shared/services/crud-service";

import { ICol } from "../../../custom-table/models/Col";
import { ITableData } from "../../../custom-table/models/TableData";

@Component({
    selector: "app-input-select-data",
    template: `
        <div class="field flex">
            <button
                pButton
                type="button"
                icon="bi bi-search"
                (click)="display = true"
                [disabled]="control.disabled"
                class="border-noround-right"
            ></button>
            <span class="p-float-label flex-1">
                <p-inputNumber
                    [inputId]="inputId"
                    [formControl]="control"
                    class="w-full"
                    [style]="{ width: '100%' }"
                    [inputStyle]="{
                        width: '100%',
                        borderRadius: '0 6px 6px 0'
                    }"
                ></p-inputNumber>
                <label [for]="inputId">{{ label }}</label>
            </span>
        </div>

        <p-dialog
            [modal]="true"
            appendTo="body"
            [style]="{ width: '90vw' }"
            [maximizable]="true"
            [showHeader]="false"
            [(visible)]="display"
        >
            <ng-container *ngIf="data$ | async as data; else loading">
                <app-select-data-table
                    (getEvent)="getEvent()"
                    (chooseEvent)="chooseEvent($event)"
                    [cols]="cols"
                    [data]="data"
                ></app-select-data-table>
            </ng-container>
            <ng-template #loading>
                <app-custom-table-skeleton
                    [cols]="cols"
                    [chooseMode]="true"
                ></app-custom-table-skeleton>
            </ng-template>
        </p-dialog>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectDataInputComponent implements OnInit, OnChanges {
    @Input() label: string = "";
    @Input() control!: FormControl;
    protected inputId: string;

    @Input() service!: CrudService<any>;

    @Input() filter?: { field: string, value: string | number };
    @Input() await: boolean = false;
    @Input() targetId?: number;

    protected display: boolean = false;
    data$!: Observable<ITableData<any>>;
    cols: ICol[] = [];

    @Output() onChoose = new EventEmitter<any>();

    chooseEvent(event: any) {
        this.control.setValue(event["id"]);
        this.display = false;
        this.onChoose.emit(event);
    }

    constructor(
        public dialogService: DialogService,
        public messageService: MessageService
    ) {
        this.inputId = `input-${this.label.toLocaleLowerCase()}-${Math.floor(
            Math.random() * 100
        )}`;
    }

    ngOnChanges(changes: any): void {
        if (this.await && changes.targetId.currentValue) {
            this.getEvent();
        }
    }

    ngOnInit(): void {
        if (!this.await) {
            this.getEvent();
        }
        this.cols = this.service.cols;
    }

    getEvent() {
        this.data$ = this.service.get(this.filter);
    }
}
