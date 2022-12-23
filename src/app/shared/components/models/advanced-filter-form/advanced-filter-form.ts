import { FormGroup } from "@angular/forms";
import { IFilter } from "src/app/shared/services/http-params/models/filter";

import { FilterAdvancedService } from "../../buttons/filter-popup/filter-advanced/services/filter-advanced.service";

export class AdvancedFilterForm {
    constructor(
        protected form: FormGroup,
        protected filterAdvancedService: FilterAdvancedService
    ) {}

    protected onFilter(obj: any = this.form.getRawValue()) {
        // Ordenação
        let filters: IFilter = {
            order: {
                orderBy: this.form.controls["orderBy"].value,
                desc: this.form.controls["desc"].value,
            },
        };
        // Cria array e popula com campos para filtrar
        filters.search = [];
        for (const key in obj) {
            if (
                Object.prototype.hasOwnProperty.call(
                    obj,
                    key
                )
            ) {
                if (key == "orderBy" || key == "desc") continue;

                const element = {
                    field: key,
                    value: obj[key],
                };
                filters.search.push(element);
            }
        }
        this.filterAdvancedService.setFilters(filters);
    }
}
