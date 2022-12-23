import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FilterAdvancedService } from "src/app/shared/components/buttons/filter-popup/filter-advanced/services/filter-advanced.service";
import { AdvancedFilterForm } from "src/app/shared/components/models/advanced-filter-form/advanced-filter-form";

import { FornecedorService } from "../../services/fornecedor.service";

@Component({
    templateUrl: "./fornecedor-advanced-filter.component.html",
})
export class FornecedorAdvancedFilterComponent extends AdvancedFilterForm {
    constructor(
        formBuilder: FormBuilder,
        protected fornecedorService: FornecedorService,
        override filterAdvancedService: FilterAdvancedService
    ) {
        super(
            formBuilder.group({
                orderBy: "id",
                desc: false,
                status: 'A',
                minId: null,
                maxId: null,
                tipo: 'F',
                razaoSocial: null,
                fantasia: null,
                cpfCnpj: null,
                celular: null,
                email: null,
            }),
            filterAdvancedService
        );
    }

    protected get isPF(): boolean {
        return this.form.get("tipo")!.value === "F";
    }

    protected override onFilter(): void {
        if (this.isPF) this.form.get("fantasia")!.setValue(null);

        super.onFilter();
    }
}
