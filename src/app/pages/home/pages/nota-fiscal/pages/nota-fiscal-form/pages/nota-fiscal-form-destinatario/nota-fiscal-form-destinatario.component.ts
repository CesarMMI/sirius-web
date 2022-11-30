import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { Subscription } from "rxjs";
import { ClienteEnderecoService } from "src/app/pages/home/pages/cliente/pages/cliente-form/cliente-endereco/services/cliente-endereco.service";
import { ClienteTableComponent } from "src/app/pages/home/pages/cliente/pages/cliente-table/cliente-table.component";
import { ClienteService } from "src/app/pages/home/pages/cliente/services/cliente.service";
import { SelectDataService } from "src/app/shared/components/custom-form/select-data/select-data.service";
import { FormComponent } from "src/app/shared/components/form-component/form-component";
import { FormLockService } from "src/app/shared/services/form-lock.service";
import { NotaFiscalService } from "../../../../services/nota-fiscal.service";

@Component({
    templateUrl: "./nota-fiscal-form-destinatario.component.html",
    styles: [],
})
export class NotaFiscalFormDestinatarioComponent extends FormComponent<any> {
    private indfinalSub?: Subscription;

    constructor(
        formBuilder: FormBuilder,
        notaFiscalService: NotaFiscalService,
        public clienteService: ClienteService,
        public clienteEnderecoService: ClienteEnderecoService,
        protected selectDataService: SelectDataService,
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
                ClienteId: [null, Validators.required],
                Destxnome: null,
                Destcnpjcpf: null,
                Indiedest: null,
                Destie: null,
                Indfinal: null,
                EnderecoId: null,
                Enderdestxlgr: null,
                Enderdestnro: null,
                Enderdestxcpl: null,
                Enderdestxbairro: null,
                Enderdestxmun: null,
                Enderdestuf: null,
                Destemail: null,
                Enderemitfone: null,
            })
        );
        this.indfinalSub = this.form
            .get("Indfinal")
            ?.valueChanges.subscribe((value) => {
                switch (value) {
                    case "0":
                        this.form.get("Indfinal")?.setValue(false);
                        break;
                    case "1":
                        this.form.get("Indfinal")?.setValue(true);
                        break;
                }
            });
    }

    protected targetId?: number;

    onChooseCliente(event: any) {
        console.log(event);

        this.form.patchValue({
            ClienteId: event["id"],
            Destcnpjcpf: event["cpfCnpj"],
            Destxnome: event["razaoSocial"],
            Indiedest: event["indIE"],
            Destie: event["inscEstadual"],
        });

        this.clienteService.selectedCliente = event;
        this.targetId = event.id;
    }

    onChooseEndereco(event: any) {
        this.form.patchValue({
            Enderdestxbairro: event["bairro"],
            Enderdestcep: event["cep"],
            Enderdestxmun: event["cidade"],
            Enderdestcmun: event["codMun"],
            Enderdestxcpl: event["complemento"],
            EnderecoId: event["id"],
            Enderdestxlgr: event["logradouro"],
            Enderdestnro: event["numero"],
            Enderdestuf: event["uf"],
        });
    }

    override ngOnDestroy(): void {
        this.indfinalSub?.unsubscribe();
        super.ngOnDestroy();
    }

    override submit(submitObj?: Object | any | undefined): void {
        super.submit(this.genProdutoObj());
    }

    private genProdutoObj() {
        alert("genProdutoObj");
        return <any>{
            ...this.form.getRawValue(),
            Indfinal: this.form.get("Indfinal")?.value === true ? "1" : "0",
        };
    }
}
