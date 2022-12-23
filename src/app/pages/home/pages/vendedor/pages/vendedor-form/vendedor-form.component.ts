import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { EMPTY, first, iif, Subscription, switchMap } from "rxjs";
import { FormComponent } from "src/app/shared/components/models/form-component/form-component";
import { EnderecoService } from "src/app/shared/services/endereco/endereco.service";
import { FormLockService } from "src/app/shared/services/form-lock.service";

import { IVendedor } from "../../models/vendedor";
import { VendedorService } from "../../services/vendedor.service";

@Component({
    templateUrl: "./vendedor-form.component.html",
    styles: [],
})
export class VendedorFormComponent extends FormComponent<IVendedor> {
    private cepSub?: Subscription;

    constructor(
        formBuilder: FormBuilder,
        enderecoService: EnderecoService,
        private vendedorService: VendedorService,
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
            "vendedor",
            "/home/vendedores",
            vendedorService,
            ["id"],
            formBuilder.group({
                id: [{ value: null, disabled: true }],
                nome: [null, Validators.required],
                apelido: null,
                status: ["a", Validators.required],
                cpf: null,
                cnpj: null,
                inscEstadual: null,
                rg: null,
                telefone: null,
                celular: null,
                email: null,
                fax: null,
                pessoaContato: null,
                cep: null,
                logradouro: null,
                numero: null,
                complemento: null,
                bairro: null,
                regiao: null,
                cidade: null,
                uf: null,
                departamento: null,
                porcComissao: null,
                porcDescMax: null,
                nomeBanco: null,
                numeroBanco: null,
                agencia: null,
                digitoAgencia: null,
                conta: null,
                digitoConta: null,
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

    override ngOnDestroy(): void {
        this.cepSub?.unsubscribe();
        super.ngOnDestroy();
    }
}
