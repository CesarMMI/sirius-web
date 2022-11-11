import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";
import { map, Observable, switchMap, tap } from "rxjs";
import { IEmpresa } from "src/app/pages/home/pages/empresa/models/Empresa";
import { EmpresaService } from "src/app/pages/home/pages/empresa/services/empresa.service";
import {
  IResponsiveObject,
  ResponsiveService,
} from "src/app/shared/services/responsive.service";
import { TokensService } from "src/app/shared/services/tokens.service";

@Component({
  selector: "app-empresa-bar",
  templateUrl: "./empresa-bar.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmpresaBarComponent {
  protected empresa$: Observable<string | null>;

  protected responsiveObject$: Observable<IResponsiveObject>;

  constructor(
    responsiveService: ResponsiveService,
    private router: Router,
    private tokensService: TokensService,
    private empresaService: EmpresaService
  ) {
    this.empresa$ = empresaService.chosenEmpresa$.asObservable().pipe(
      switchMap((empresa: IEmpresa | null) => {
        return this.responsiveObject$.pipe(
          map((responsiveObject: IResponsiveObject) => {
            if (!empresa) return null;

            switch (responsiveObject.breakpoint) {
              case "xs":
              case "sm":
                return `${empresa.xrazaoSocial} | ${this.formatCnpj(empresa.cnpj)}`;
              default:
                return `${empresa.xfant} | ${empresa.xrazaoSocial} | ${this.formatCnpj(empresa.cnpj)}`;
            }
          })
        );
      })
    );
    this.responsiveObject$ = responsiveService.responsiveObject$;
  }

  protected refreshClick(): void {
    this.empresaService.chosenEmpresa$.next(null);
    this.tokensService.token = "";
    this.router.navigate(["/home/empresas"]);
  }

  private formatCnpj(cnpj: string): string {
    return `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(
      5,
      8
    )}/${cnpj.slice(8, 12)}-${cnpj.slice(12)}`;
  }
}
