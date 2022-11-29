import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ClienteTableComponent } from 'src/app/pages/home/pages/cliente/pages/cliente-table/cliente-table.component';
import { ClienteService } from 'src/app/pages/home/pages/cliente/services/cliente.service';
import { SelectDataService } from 'src/app/shared/components/custom-form/select-data/select-data.service';
import { FormComponent } from 'src/app/shared/components/form-component/form-component';
import { FormLockService } from 'src/app/shared/services/form-lock.service';
import { NotaFiscalService } from '../../../../services/nota-fiscal.service';

@Component({
  templateUrl: './nota-fiscal-form-destinatario.component.html',
  styles: [ ]
})
export class NotaFiscalFormDestinatarioComponent extends FormComponent<any> {
  protected clienteTableComponent = typeof ClienteTableComponent

  constructor(
      formBuilder: FormBuilder,
      notaFiscalService: NotaFiscalService,
      public clienteService: ClienteService,
      protected selectDataService: SelectDataService,
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
          "notaFiscal",
          "/home/notaFiscals",
          notaFiscalService,
          ["Id", "Nnf", "Chave", "Dhemi", "Status"],
          formBuilder.group({
              Id: [{ value: null, disabled: true }],
              Serie: null,
              Nnf: [{ value: null, disabled: true }],
              Chave: [{ value: null, disabled: true }],

              Dhemi: [{ value: null, disabled: true }],
              Status: [{ value: null, disabled: true }],
              Iddest: null,

              Tpemis: null,
              Finnfe: null,

              Tpnf: null,
              Natop: null,

              Indpres: null,
              Modfrete: null,
          })
      );
      selectDataService.setType("clientes")
  }
}
