import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { Subscription, switchMap, iif, first, EMPTY } from "rxjs";
import { FormComponent } from "src/app/shared/components/form-component/form-component";
import { EnderecoService } from "src/app/shared/services/endereco.service";
import { FormLockService } from "src/app/shared/services/form-lock.service";
import { IFornecedor } from "../../models/fornecedor";
import { FornecedorService } from "../../services/fornecedor.service";

@Component({
    templateUrl: "./fornecedor-form.component.html",
    styles: [],
})
export class FornecedorFormComponent extends FormComponent<IFornecedor> {
    protected tipoFornecedor = new FormControl("F");
    private cepSub?: Subscription;

    constructor(
        formBuilder: FormBuilder,
        enderecoService: EnderecoService,
        private fornecedorService: FornecedorService,
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
            "fornecedor",
            "/home/fornecedores",
            fornecedorService,
            ["id"],
            formBuilder.group({
                id: [{ value: null, disabled: true }],
                fantasia: null,
                razaoSocial: null,
                status: "A",
                cpfCnpj: null,
                inscEstadual: null,
                cep: null,
                logradouro: null,
                numero: null,
                complemento: null,
                bairro: null,
                cidade: null,
                uf: null,
                email: null,
                celular: null,
                telefone: null,
                fax: null,
                pessoaContato: null,
                observacoes: null,
            })
        );
        // CEP Observable
        this.cepSub = this.form
            .get("cep")
            ?.valueChanges.pipe(
                switchMap((cep) => {
                    return iif(
                        () =>
                            cep != null &&
                            cep.length === 8 &&
                            (this.form.get("cep")?.touched || false),
                        enderecoService.searchByCep(cep).pipe(first()),
                        EMPTY
                    );
                })
            )
            .subscribe((response: any) =>
                this.form.patchValue({
                    logradouro: response["logradouro"],
                    bairro: response["bairro"],
                    cidade: response["localidade"],
                    uf: response["uf"],
                })
            );
    }

    override lockEvent(isLocked: boolean): void {
        if (isLocked) this.tipoFornecedor.disable();
        else this.tipoFornecedor.enable();
        super.lockEvent(isLocked);
    }

    override ngOnDestroy(): void {
        this.cepSub?.unsubscribe();
        super.ngOnDestroy();
    }
}
