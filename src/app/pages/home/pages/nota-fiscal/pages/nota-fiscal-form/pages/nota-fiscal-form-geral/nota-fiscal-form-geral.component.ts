import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { FormComponent } from "src/app/shared/components/models/form-component/form-component";
import { FormLockService } from "src/app/shared/services/form-lock.service";
import { NotaFiscalService } from "../../../../services/nota-fiscal.service";

@Component({
    templateUrl: "./nota-fiscal-form-geral.component.html",
    styles: [],
})
export class NotaFiscalFormGeralComponent extends FormComponent<any> {
    constructor(
        formBuilder: FormBuilder,
        private notaFiscalService: NotaFiscalService,
        protected override router: Router,
        protected override messageService: MessageService,
        protected override activatedRoute: ActivatedRoute,
        protected override formLockService: FormLockService
    ) {
        super(
            router,
            messageService,
            activatedRoute,
            formLockService,
            "notaFiscal",
            "/home/notaFiscals",
            notaFiscalService,
            ["id", "nnf", "chave", "dhemi", "status"],
            formBuilder.group({
                id: [{ value: null, disabled: true }],
                serie: null,
                nnf: [{ value: null, disabled: true }],
                chave: [{ value: null, disabled: true }],

                dhemi: [{ value: null, disabled: true }],
                status: [{ value: null, disabled: true }],
                iddest: null,

                tpemis: null,
                finnfe: null,

                tpnf: null,
                natop: null,

                indpres: null,
                modfrete: null,
            })
        );
    }
}
