import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AdvancedFilterForm } from "src/app/shared/components/advanced-filter-form/advanced-filter-form";

@Component({
    template: ` <p>empresa-advanced-filter works!</p> `,
    styles: [],
})
export class EmpresaAdvancedFilterComponent extends AdvancedFilterForm {
    constructor(formBuilder: FormBuilder) {
        super(
            formBuilder.group({
                
            })
        );
    }

    ngOnInit(): void {}
}
