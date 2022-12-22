import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { IProduto } from "src/app/pages/home/pages/produto/models/Produto";
import { ProdutoService } from "src/app/pages/home/pages/produto/services/produto.service";
import { FormComponent } from "src/app/shared/components/models/form-component/form-component";
import { FormLockService } from "src/app/shared/services/form-lock.service";
import { ClienteService } from "../../../../../services/cliente.service";

import { IClientePreco } from "../../models/cliente-preco";
import { ClientePrecoService } from "../../services/cliente-preco.service";

@Component({
    templateUrl: "./cliente-preco-form.component.html",
})
export class ClientePrecoFormComponent extends FormComponent<IClientePreco> {
    constructor(
        formBuilder: FormBuilder,
        clienteService: ClienteService,
        protected produtoService: ProdutoService,
        private clientePrecoService: ClientePrecoService,
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
            "Preço",
            `/home/clientes/edit/${clienteService.selectedCliente!.id}/precos`,
            clientePrecoService,
            ["id", "clienteId"],
            formBuilder.group({
              clienteId: {
                  value: clienteService.selectedCliente!.id,
                  disabled: true,
              },
                id: { value: null, disabled: true },
                produtoId: null,
                produtoCod: { value: null, disabled: true },
                valor: null,
            })
        );
    }

    protected onChooseProduto(event: IProduto) {
      this.form.get('produtoCod')!.patchValue(event.codProduto);
      this.form.get('valor')!.patchValue(event.vlrProd);
    }
}
