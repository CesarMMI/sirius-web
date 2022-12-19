import { FormGroup } from "@angular/forms";

export class AdvancedFilterForm {
    constructor(protected form: FormGroup) {}

    protected onFilter() {
        console.log(this.form.getRawValue());
    }
}
