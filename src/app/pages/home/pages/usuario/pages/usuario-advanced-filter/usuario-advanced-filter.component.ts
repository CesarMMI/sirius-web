import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { first } from 'rxjs';
import { FilterAdvancedService } from 'src/app/shared/components/buttons/filter-popup/filter-advanced/services/filter-advanced.service';
import { IDropdownItem } from 'src/app/shared/components/custom-form/models/DropdownItem';
import { AdvancedFilterForm } from 'src/app/shared/components/models/advanced-filter-form/advanced-filter-form';
import { GrupoUsuariosService } from '../../../configuracao/pages/grupo-usuarios/services/grupo-usuarios.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  templateUrl: './usuario-advanced-filter.component.html'
})
export class UsuarioAdvancedFilterComponent extends AdvancedFilterForm {
  constructor(
      formBuilder: FormBuilder,
      protected usuarioService: UsuarioService,
      grupoUsuariosService: GrupoUsuariosService,
      override filterAdvancedService: FilterAdvancedService
  ) {
      super(
          formBuilder.group({
              orderBy: "id",
              desc: false,
              status: null,
              minId: null,
              maxId: null,
              grupoId: null,
              nome: null,
              ultimoNome: null,
              email: null,
              celular: null
          }),
          filterAdvancedService
      );
      // Recupera Grupos
      grupoUsuariosService
      .get()
      .pipe(first())
      .subscribe((grupos) => {
          let arr = [];
          for (let grupo of grupos.payload) {
              arr.push({
                  label: grupo["nome"],
                  value: grupo["id"],
              });
          }
          this.grupos = arr;
      });
  }

  protected grupos: IDropdownItem[] = [];
}
