import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FilterAdvancedService } from "src/app/shared/components/buttons/filter-popup/filter-advanced/services/filter-advanced.service";
import { AdvancedFilterForm } from "src/app/shared/components/models/advanced-filter-form/advanced-filter-form";
import { PagamentoService } from "../../services/pagamento.service";

@Component({
    templateUrl: "./pagamento-advanced-filter.component.html",
})
export class PagamentoAdvancedFilterComponent extends AdvancedFilterForm {
    constructor(
        formBuilder: FormBuilder,
        protected pagamentoService: PagamentoService,
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
