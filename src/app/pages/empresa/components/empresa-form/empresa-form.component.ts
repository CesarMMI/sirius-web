import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { first } from "rxjs";
import { EmpresaService } from "src/app/pages/empresa/services/empresa.service";
import { EnderecoService } from "src/app/shared/services/endereco.service";

@Component({
  templateUrl: "./empresa-form.component.html",
  styles: [],
})
export class EmpresaFormComponent {
  protected empresaForm: FormGroup;
  protected title: string = "";

  protected loading: boolean = false;

  constructor(
    formBuilder: FormBuilder,
    activatedRoute: ActivatedRoute,
    private router: Router,
    private empresaService: EmpresaService,
    private messageService: MessageService,
    private enderecoService: EnderecoService
  ) {
    // Criar form
    this.empresaForm = formBuilder.group({
      // Primeira Linha
      id: { value: null, disabled: true },
      cnpj: [null, [Validators.required]],
      crt: { value: 0, disabled: true },
      status: "A",
      // Segunda Linha
      xfant: [null, Validators.required],
      xrazaoSocial: [null, Validators.required],
      // Terceira Linha
      xlgr: null,
      nro: null,
      xcpl: null,
      cep: null,
      // Quarta Linha
      xbairro: null,
      cmun: null,
      xmun: null,
      cidade: null,
      uf: null,
      // Quinta Linha
      fone: null,
      ie: null,
    });
    // Form patch
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")) {
        const id = parseInt(paramMap.get("id") || "0");
        const data = this.empresaService.getById(id);

        console.log(id);
        console.log(data);

        this.empresaForm.patchValue({ ...data });
      }
    });
    // Titulo
    if (activatedRoute.snapshot.url[0].toString() == "add")
      this.title = "Adicionar";
    else this.title = "Editar";
    // Observer CEP
    this.empresaForm.controls["cep"].valueChanges.subscribe((cep: string) => {
      if (cep.length === 8) {
        this.enderecoService
          .searchByCep(cep)
          .pipe(first())
          .subscribe((response: any) => {
            this.empresaForm.patchValue({
              xbairro: response["bairro"],
              cmun: response["ibge"],
              xmun: response["localidade"],
              cidade: response["localidade"],
              xlgr: response["logradouro"],
              uf: response["uf"],
            });
          });
      }
    });
  }

  protected submit(): void {
    this.loading = true;

    const id = this.empresaForm.controls["id"].value;
    if (id) alert("edit");
    else this.create();
  }

  private create(): void {
    this.empresaService
      .create(this.empresaForm.getRawValue())
      .pipe(first())
      .subscribe({
        next: (response) => {
          this.loading = false;
          console.log("next", response);
        },
        error: () => (this.loading = false),
        complete: () => {
          this.router.navigate(["/empresas"]);
        },
      });
  }

  private update(): void {
    // this.empresaService
    
  }
}
