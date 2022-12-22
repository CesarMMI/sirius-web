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
            ["Id", "Nnf", "Chave", "Dhemi", "Status"],
            formBuilder.group({
                Id: [{ value: null, disabled: true }],
                Serie: null,
                Nnf: [{ value: null, disabled: true }],
                Chave: [{ value: null, disabled: true }],

                Dhemi: [{ value: null, disabled: true }],
                Status: [{ value: null, disabled: true }],
                Iddest: null,

                Tpemis: null,
                Finnfe: null,

                Tpnf: null,
                Natop: null,

                Indpres: null,
                Modfrete: null,
            })
        );
    }
}
