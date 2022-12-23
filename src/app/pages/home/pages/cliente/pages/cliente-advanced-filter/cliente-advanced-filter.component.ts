import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FilterAdvancedService } from 'src/app/shared/components/buttons/filter-popup/filter-advanced/services/filter-advanced.service';
import { AdvancedFilterForm } from 'src/app/shared/components/models/advanced-filter-form/advanced-filter-form';
import { ClienteService } from '../../services/cliente.service';

@Component({
  templateUrl: './cliente-advanced-filter.component.html'
})
export class ClienteAdvancedFilterComponent extends AdvancedFilterForm {
  constructor(
      formBuilder: FormBuilder,
      protected clienteService: ClienteService,
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
              cpfCnpj: null
          }),
          filterAdvancedService
      );
  }

  protected get isPF(): boolean {
    return this.form.get('tipo')!.value === 'F'
  }

  protected override onFilter(): void {
    if(this.isPF){
      this.form.get('fantasia')?.setValue(null);
    }
    
    super.onFilter();
  }
}
