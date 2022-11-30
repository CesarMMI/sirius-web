import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { FormComponent } from "src/app/shared/components/form-component/form-component";
import { FormLockService } from "src/app/shared/services/form-lock.service";
import { NotaFiscalService } from "../../../../services/nota-fiscal.service";

@Component({
    templateUrl: "./nota-fiscal-form-totalizadores.component.html",
    styles: [],
})
export class NotaFiscalFormTotalizadoresComponent extends FormComponent<any> {
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
            [],
            formBuilder.group({
                Vcofins: null,
                Vpis: null,
                Vfrete: null,
                Vprod: null,
                Vdesc: null,
                Voutro: null,
                Vbc: null,
                Vicms: null,
                Vbcst: null,
                Vicmsst: null,
                Vnf: null,
            })
        );
    }
}
