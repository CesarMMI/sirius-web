import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { FormComponent } from "src/app/shared/components/form-component/form-component";
import { FormLockService } from "src/app/shared/services/form-lock.service";
import { FornecedorService } from "../../../fornecedor/services/fornecedor.service";
import { PagamentoService } from "../../services/pagamento.service";

@Component({
    templateUrl: "./pagamento-form.component.html",
    styles: [],
})
export class PagamentoFormComponent extends FormComponent<any> {
    constructor(
        formBuilder: FormBuilder,
        public fornecedorService: FornecedorService,
        private pagamentoService: PagamentoService,
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
            "Pagamento",
            "/home/pagamentos",
            pagamentoService,
            ["id", "dataCriacao"],
            formBuilder.group({
              id: [{ value: null, disabled: true }],
              documento: null,
              numeroNf: null,
              status: ['P'],
              descricao: null,
              formaPagamento: '01',
              fornecedorId: null,
              fornecedorNome: null,
              valorBruto: null,
              valorPago: null,
              dataVencimento: [{ value: null, disabled: false }],
              dataCriacao: [{ value: null, disabled: true }],
              dataRealizado: [{ value: null, disabled: true }],
            })
        );
    }

    onChoose(event: any) {
        this.form.get("fornecedorNome")?.patchValue(event.razaoSocial);
    }
}
