import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { first } from 'rxjs';
import { IProduto } from 'src/app/pages/home/pages/produto/models/Produto';
import { ProdutoService } from 'src/app/pages/home/pages/produto/services/produto.service';

@Component({
  templateUrl: './produto-form.component.html',
  styles: [
  ]
})
export class ProdutoFormComponent {
  protected form: FormGroup;
  protected loading: boolean = false;

  constructor(
    formBuilder: FormBuilder,
    activatedRoute: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService,
    private messageService: MessageService
  ) {
    this.form = formBuilder.group({
      id: { value: null, disabled: true },
      codProduto: null,
      descricao: [null, [Validators.required]],
      codEAN: [null, [Validators.minLength(8), Validators.maxLength(14)]],
      NCM: [null, [Validators.maxLength(8)]],
      CFOP: null,
      unCom: null,
      qtdCom: null,
      vlrUnCom: null,
      vlrProd: null,
      codEANTrib: null,
      unTrib: null,
      qtdTrib: null,
      vlrUnTrib: null,
      saldo: [{ value: 0, disabled: true }],
      status: ['A'],
    })

    activatedRoute.paramMap.pipe(first()).subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id'))
        produtoService.getById(parseInt(paramMap.get('id') || '0'))
          .pipe(first()).subscribe({
            next: response => this.form.patchValue(response)
          })
    });
  }

  protected submit(): void {
    this.loading = true;
    const mode = this.form.get('id')?.value ? 'update' : 'create'

    this.produtoService[mode](this.genProdutoObj())
      .pipe(first()).subscribe({
        next: (response) => {
          this.loading = false;
          this.messageService.add({
            severity: 'success',
            summary: `Produto ${mode === 'update' ? 'alterado' : 'criado'} com sucesso!`
          })
        },
        error: (err) => {
          this.loading = false;
          this.messageService.add({
            severity: 'error',
            summary: err.error?.erro || 'Erro Desconhecido',
            detail: `${err.statusText || 'Erro'} ${err.status}`
          })
        },
        complete: () => this.router.navigate(['/home/produtos'])
      })

  }

  private genProdutoObj() {
    return <IProduto>{
      // Total
      ...this.form.getRawValue(),
      vlrProd: this.form.get('vlrUnCom')?.value * 1,
      // Tibutário
      unTrib: this.form.get('unCom')?.value,
      qtdTrib: 1,
      vlrUnTrib: this.form.get('vlrUnCom')?.value,
      // Comercial
      unCom: this.form.get('unCom')?.value,
      qtdCom: 1,
      vlrUnCom: this.form.get('vlrUnCom')?.value,
      codEANTrib: this.form.get('codEAN')?.value,
    };
  }

}
