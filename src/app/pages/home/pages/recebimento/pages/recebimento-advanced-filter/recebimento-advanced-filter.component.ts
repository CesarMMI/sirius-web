import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FilterAdvancedService } from "src/app/shared/components/buttons/filter-popup/filter-advanced/services/filter-advanced.service";
import { AdvancedFilterForm } from "src/app/shared/components/models/advanced-filter-form/advanced-filter-form";
import { RecebimentoService } from "../../services/recebimento.service";

@Component({
    templateUrl: "./recebimento-advanced-filter.component.html",
})
export class RecebimentoAdvancedFilterComponent extends AdvancedFilterForm {
    constructor(
        formBuilder: FormBuilder,
        protected recebimentoService: RecebimentoService,
        override filterAdvancedService: FilterAdvancedService
    ) {
        super(
            formBuilder.group({
                orderBy: "id",
                desc: false,
                status: null,
                minId: null,
                maxId: null,
                documento: null,
                minValorBruto: null,
                maxValorBruto: null,
                minvalorRecebido: null,
                maxvalorRecebido: null,
                formaPagamento: null,
                dataCriacao: null,
                minDataCriacao: null,
                maxDataCriacao: null,
                dataVencimento: null,
                minDataVencimento: null,
                maxDataVencimento: null,
                dataRealizado: null,
                minDataRealizado: null,
                maxDataRealizado: null
            }),
            filterAdvancedService
        );
    }
}
