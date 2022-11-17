import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { MessageService } from "primeng/api";
import {
  debounceTime,
  EMPTY,
  filter,
  first,
  iif,
  shareReplay,
  Subscription,
  switchMap,
  tap,
} from "rxjs";
import { ResponsiveComponent } from "src/app/shared/components/responsive-component/responsive-component";
import { EnderecoService } from "src/app/shared/services/endereco.service";
import { ResponsiveService } from "src/app/shared/services/responsive.service";
import { IProduto } from "../../../produto/models/Produto";
import { EmpresaService } from "../../services/empresa.service";

@Component({
  templateUrl: "./empresa-form.component.html",
  styles: [],
})
export class EmpresaFormComponent
  extends ResponsiveComponent
  implements OnDestroy, OnInit
{
  protected form: FormGroup;

  protected loading: boolean = false;
  protected isLocked: boolean = true;

  private cepSub: Subscription | undefined;

  constructor(
    formBuilder: FormBuilder,
    activatedRoute: ActivatedRoute,
    enderecoService: EnderecoService,
    responsiveService: ResponsiveService,
    private router: Router,
    private ref: ChangeDetectorRef,
    private empresaService: EmpresaService,
    private messageService: MessageService
  ) {
    super(responsiveService);
    // Form creation
    this.form = formBuilder.group({
      id: { value: null, disabled: true },
      cnpj: null,
      xrazaoSocial: null,
      status: ["A"],
      xfant: null,
      xlgr: null,
      nro: null,
      xcpl: [null],
      xbairro: null,
      cmun: null,
      xmun: null,
      uf: null,
      cep: null,
      fone: null,
      ie: null,
      crt: [{ value: "1", disabled: true }],
      token: null,
    });
    // Get edit data
    activatedRoute.paramMap.pipe(first()).subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")){
        empresaService
        .getById(parseInt(paramMap.get("id") || "0"))
        .pipe(first())
        .subscribe({
          next: (response) => this.form.patchValue(response),
        });
      }
    });
    // CEP input observable
    this.cepSub = this.form
      .get("cep")
      ?.valueChanges.pipe(
        switchMap((cep) => {
          return iif(
            () =>
              cep != null &&
              cep.length === 8 &&
              (this.form.get("cep")?.touched || false),
            enderecoService.searchByCep(cep).pipe(first()),
            EMPTY
          );
        }),
        debounceTime(500)
      )
      .subscribe((response: any) =>
        this.form.patchValue({
          xlgr: response["logradouro"],
          xbairro: response["bairro"],
          cmun: response["ibge"],
          xmun: response["localidade"],
          uf: response["uf"],
        })
      );
  }

  ngOnInit(): void {
    this.ref.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.cepSub) this.cepSub.unsubscribe;
  }

  protected lockEvent(isLocked: boolean): void {
    this.isLocked = isLocked;
    if (isLocked) {
      this.form.disable();
    } else {
      this.form.enable();
      this.form.get("id")?.disable();
      this.form.get("crt")?.disable();
    }
  }

  protected submit(): void {
    this.loading = true;
    const mode = this.form.get("id")?.value ? "update" : "create";

    this.empresaService[mode](this.form.getRawValue())
      .pipe(first())
      .subscribe({
        next: (response) => {
          this.loading = false;
          this.messageService.add({
            severity: "success",
            summary: `Produto ${
              mode === "update" ? "alterado" : "criado"
            } com sucesso!`,
          });
        },
        error: (err) => {
          this.loading = false;
          this.messageService.add({
            severity: "error",
            summary: err.error?.erro || "Erro Desconhecido",
            detail: `${err.statusText || "Erro"} ${err.status}`,
          });
        },
        complete: () => this.router.navigate(["/home/produtos"]),
      });
  }
}
