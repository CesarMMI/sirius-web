import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { EMPTY, first, iif, Subscription, switchMap } from "rxjs";
import { FormComponent } from "src/app/shared/components/form-component/form-component";
import { EnderecoService } from "src/app/shared/services/endereco.service";
import { FormLockService } from "src/app/shared/services/form-lock.service";
import { ClienteService } from "../../../../../services/cliente.service";
import { ClienteEnderecoService } from "../../services/cliente-endereco.service";

@Component({
    templateUrl: "./cliente-endereco-form.component.html",
    styles: [],
})
export class ClienteEnderecoFormComponent extends FormComponent<any> {
    private cepSub?: Subscription;

    constructor(
        formBuilder: FormBuilder,
        clienteService: ClienteService,
        enderecoService: EnderecoService,
        private clienteEnderecoService: ClienteEnderecoService,
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
            "Endereço",
            `/home/clientes/edit/${clienteService.selectedCliente?.id}/enderecos`,
            clienteEnderecoService,
            ["id"],
            formBuilder.group({
                id: null,
                cep: null,
                tipoLogradouro: null,
                logradouro: null,
                numero: null,
                complemento: null,
                andar: null,
                bairro: null,
                cidade: null,
                estado: null,
                codMun: null,
                codUf: null,
                uf: null,
                cliente_id: clienteService.selectedCliente?.id,
                tipoEndereco: ["p"],
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
                    logradouro: response['logradouro'],
                    bairro: response['bairro'],
                    codMun: response['ibge'],
                    cidade: response['localidade'],
                    uf: response['uf'],
                    codUf: response['ibge'].substring(0, 2),
                })
            );
    }

    override ngOnDestroy(): void {
        this.cepSub?.unsubscribe();
        super.ngOnDestroy();
    }
}
