import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { first, map, Observable } from "rxjs";
import { FormComponent } from "src/app/shared/components/models/form-component/form-component";
import { FormLockService } from "src/app/shared/services/form-lock.service";
import { UserInfoService } from "src/app/shared/services/user-info/user-info.service";
import { ListaPrecosService } from "../../../../configuracao/pages/lista-precos/services/lista-precos.service";
import { VendedorService } from "../../../../vendedor/services/vendedor.service";
import { ICliente } from "../../../models/cliente";
import { ClienteService } from "../../../services/cliente.service";

@Component({
    templateUrl: "./cliente-form-geral.component.html",
    styles: [],
})
export class ClienteFormGeralComponent extends FormComponent<ICliente> {
    constructor(
        formBuilder: FormBuilder,
        clienteService: ClienteService,
        protected userInfoService: UserInfoService,
        protected vendedorService: VendedorService,
        protected listaPrecosService: ListaPrecosService,
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
            "Cliente",
            "/home/clientes",
            clienteService,
            ["id"],
            formBuilder.group({
                id: { value: null, disabled: true },
                razaoSocial: null,
                tipoCliente: "F",
                status: "A",
                fantasia: null,
                inscEstadual: null,
                inscMunicipal: null,
                exclusivo: false,
                cpfCnpj: null,
                vendedorId: null,
                vendedorNome: null,
                listaPrecoId: null,
                listaPrecoNome: null,
            })
        );
        //
        userInfoService.userInfo$.pipe(first()).subscribe((userInfo) => {
            this.isVendedor = userInfo!.vendedorId > 0 ? true : false;
        });
    }

    isVendedor!: boolean;

    protected get tipoCliente(): string {
        return this.form.get("tipoCliente")?.value;
    }

    protected onChooseVendedor(event: any) {
        this.form.get("vendedorNome")!.patchValue(event["nome"]);
    }

    protected onChooseLista(event: any) {
        this.form.get("listaPrecoNome")!.patchValue(event["descricao"]);
    }

    private genObj(): Object {
        return {
            ...this.form.getRawValue(),
            exclusivo: this.form.get("exclusivo")!.value ? -1 : 0,
        };
    }

    override submit(submitObj?: Object | ICliente | undefined): void {
        super.submit(this.genObj());
    }
}
