import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FilterAdvancedService } from 'src/app/shared/components/buttons/filter-popup/filter-advanced/services/filter-advanced.service';
import { AdvancedFilterForm } from 'src/app/shared/components/models/advanced-filter-form/advanced-filter-form';
import { VendedorService } from '../../services/vendedor.service';

@Component({
    templateUrl: "./vendedor-advanced-filter.component.html",
})
export class VendedorAdvancedFilterComponent extends AdvancedFilterForm {
    constructor(
        formBuilder: FormBuilder,
        protected vendedorService: VendedorService,
        override filterAdvancedService: FilterAdvancedService
    ) {
        super(
            formBuilder.group({
                orderBy: "id",
                desc: false,
                status: null,
                minId: null,
                maxId: null,
                nome: null,
                apelido: null,
                cpf: null,
                cnpj: null,
                celular: null,
                email: null
            }),
            filterAdvancedService
        );
    }
}
