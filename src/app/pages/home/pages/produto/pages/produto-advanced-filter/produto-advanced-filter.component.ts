import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FilterAdvancedService } from "src/app/shared/components/buttons/filter-popup/filter-advanced/services/filter-advanced.service";
import { AdvancedFilterForm } from "src/app/shared/components/models/advanced-filter-form/advanced-filter-form";

import { ProdutoService } from "../../services/produto.service";

@Component({
    templateUrl: "./produto-advanced-filter.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProdutoAdvancedFilterComponent extends AdvancedFilterForm {
    constructor(
        formBuilder: FormBuilder,
        protected produtoService: ProdutoService,
        override filterAdvancedService: FilterAdvancedService
    ) {
        super(
            formBuilder.group({
                orderBy: "id",
                desc: false,
                status: null,
                minId: null,
                maxId: null,
                codProduto: null,
                descricao: null,
                minValor: null,
                maxValor: null,
                unidade: null,
                minSaldo: null,
                maxSaldo: null,
            }),
            filterAdvancedService
        );
    }
}
