import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { FormComponent } from "src/app/shared/components/form-component/form-component";
import { FormLockService } from "src/app/shared/services/form-lock.service";
import { ICliente } from "../../../models/cliente";
import { ClienteService } from "../../../services/cliente.service";

@Component({
    templateUrl: "./cliente-form-geral.component.html",
    styles: [],
})
export class ClienteFormGeralComponent extends FormComponent<ICliente> {
    constructor(
        formBuilder: FormBuilder,
        private clienteService: ClienteService,
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
            "cliente",
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
                vendedorId: 0,
                cpfCnpj: null,
            })
        );
    }

    protected get tipoCliente(): string {
      return this.form.get("tipoCliente")?.value;
    }
}
