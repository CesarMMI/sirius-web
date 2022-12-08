import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { FormComponent } from "src/app/shared/components/form-component/form-component";
import { FormLockService } from "src/app/shared/services/form-lock.service";
import { ClienteService } from "../../../cliente/services/cliente.service";
import { FornecedorService } from "../../../fornecedor/services/fornecedor.service";
import { RecebimentoService } from "../../services/recebimento.service";

@Component({
    templateUrl: "./recebimento-form.component.html",
    styles: [],
})
export class RecebimentoFormComponent extends FormComponent<any> {
    constructor(
        formBuilder: FormBuilder,
        public clienteService: ClienteService,
        private recebimentoService: RecebimentoService,
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
            "Recebimento",
            "/home/recebimentos",
            recebimentoService,
            ["id", "dataCriacao"],
            formBuilder.group({
                id: [{ value: null, disabled: true }],
                numCupom: [null],
                numPedido: [null],
                status: ["P"],
                formaPagamento: [null],
                clienteId: [null],
                clienteRSocial: [null],
                valorBruto: [null],
                valorRecebido: [null],
                dataVencimento: [null],
                dataCriacao: [{ value: null, disabled: true }],
                dataRealizado: [null],
            })
        );
    }

    onChoose(event: any) {
        this.form.get("clienteRSocial")?.patchValue(event.razaoSocial);
    }
}
