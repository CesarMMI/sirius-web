import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnDestroy,
    OnInit,
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { MessageService } from "primeng/api";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { first } from "rxjs";
import { ClienteService } from "src/app/pages/home/pages/cliente/services/cliente.service";
import { CrudService } from "src/app/shared/services/crud-service";
import { SelectDataTableComponent } from "../select-data-table/select-data-table.component";

@Component({
    selector: "app-input-select-data",
    template: `
        <div class="field flex">
            <button
                pButton
                type="button"
                icon="bi bi-search"
                (click)="display = true"
                class="border-noround-right"
            ></button>
            <span class="p-float-label">
                <p-inputNumber
                    [inputId]="inputId"
                    [formControl]="control"
                    class="w-full"
                    [style]="{ width: '100%' }"
                    [inputStyle]="{ width: '100%', borderRadus: '0 6px 6px 0' }"
                ></p-inputNumber>
                <label [for]="inputId">{{ label }}</label>
            </span>
        </div>

        <p-sidebar [(visible)]="display" [fullScreen]="true">
            {{ data$ | async | json }}
        </p-sidebar>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectDataInputComponent implements OnDestroy, OnInit {
    @Input() label: string = "";
    @Input() control!: FormControl;
    protected inputId: string;

    @Input() service!: CrudService<any>;
    protected display: boolean = false;
    ref!: DynamicDialogRef;

    data$: any

    constructor(
        public dialogService: DialogService,
        public messageService: MessageService
    ) {
        this.inputId = `input-${this.label.toLocaleLowerCase()}-${Math.floor(
            Math.random() * 100
        )}`;
    }
    ngOnInit(): void {
        console.log(typeof this.service)
        console.log(this.service.cols)
        this.data$ = this.service.get();
    }

    show() {
        this.ref = this.dialogService.open(SelectDataTableComponent, {
            showHeader: false,
            width: "100%",
            contentStyle: { overflow: "auto" },
            baseZIndex: 10000,
            maximizable: true,
        });

        this.ref.onClose.subscribe((product: any) => {
            if (product) {
                this.messageService.add({
                    severity: "info",
                    summary: "Product Selected",
                    detail: product.name,
                });
            }
        });
    }

    ngOnDestroy() {
        if (this.ref) {
            this.ref.close();
        }
    }
}
