import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FilterAdvancedService } from "src/app/shared/components/buttons/filter-popup/filter-advanced/services/filter-advanced.service";
import { AdvancedFilterForm } from "src/app/shared/components/models/advanced-filter-form/advanced-filter-form";

import { PedidoVendaService } from "../../services/pedido-venda.service";

@Component({
    templateUrl: "./pedido-venda-advanced-filter.component.html",
})
export class PedidoVendaAdvancedFilterComponent extends AdvancedFilterForm {
    constructor(
        formBuilder: FormBuilder,
        protected pedidoVendaService: PedidoVendaService,
        override filterAdvancedService: FilterAdvancedService
    ) {
        super(
            formBuilder.group({
                orderBy: "id",
                desc: false,
                status: null,
                minId: null,
                maxId: null,
                dataCriacao: null,
                minDataCriacao: null,
                maxDataCriacao: null,
                minNumero: null,
                maxNumero: null,
                minValorBruto: null,
                maxValorBruto: null,
                minValorLiquido: null,
                maxValorLiquido: null,
            }),
            filterAdvancedService
        );
    }

    protected override onFilter(): void {
        // Recupera datas
        let datas: Date[] = this.form.get("dataCriacao")!.value;
        // Cria objeto
        let obj = {
            ...this.form.getRawValue(),
        };
        if (datas) {
            obj["minDataCriacao"] = datas[0].toISOString();
            obj["maxDataCriacao"] = datas[1].toISOString();
        }
        delete obj["dataCriacao"];

        super.onFilter(obj);
    }
}
