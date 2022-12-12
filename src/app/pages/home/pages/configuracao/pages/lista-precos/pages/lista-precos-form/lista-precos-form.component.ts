import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { FormComponent } from 'src/app/shared/components/form-component/form-component';
import { FormLockService } from 'src/app/shared/services/form-lock.service';
import { IListaPrecos } from '../../models/lista-precos';
import { ListaPrecosService } from '../../services/lista-precos.service';

@Component({
  templateUrl: './lista-precos-form.component.html',
  styles: [ ]
})
export class ListaPrecosFormComponent extends FormComponent<IListaPrecos> {
  constructor(
      formBuilder: FormBuilder,
      protected listaPrecosService: ListaPrecosService,
      protected override router: Router,
      protected override messageService: MessageService,
      protected override activatedRoute: ActivatedRoute,
      protected override formLockService: FormLockService
  ) {
      super(
          router,
          messageService,
          activatedRoute,
          formLockService,
          "Grupo",
          "/home/configuracoes/grupos-usuarios",
          listaPrecosService,
          ["id"],
          formBuilder.group({
              id: { value: null, disabled: true },
              descricao: null
          })
      );
      // this.permissoes$ = listaPrecosService.permissoes$;
  }

  // protected permissoes$: Observable<any>

  protected onPermissaoClick(event: any, permissao: any) {
    console.log(event)
    console.log(permissao)
  }
}
