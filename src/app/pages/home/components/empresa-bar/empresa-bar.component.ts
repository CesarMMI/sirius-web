import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";
import { map, Observable, switchMap, tap } from "rxjs";
import { IEmpresa } from "src/app/pages/home/pages/empresa/models/Empresa";
import { EmpresaService } from "src/app/pages/home/pages/empresa/services/empresa.service";
import {
  IResponsive,
  ResponsiveService,
} from "src/app/shared/services/responsive.service";
import { TokensService } from "src/app/shared/services/tokens.service";

@Component({
  selector: "app-empresa-bar",
  template: `
    <ng-container *ngIf="responsive$ | async as responsive">
      <ng-container *ngIf="empresa$ | async as empresa; else loading">
        <div
          [ngClass]="{
            'mx-2': responsive.width < 768,
            'w-4 mx-auto': responsive.width >= 768
          }"
          class="flex gap-2 p-2 surface-ground border-round-lg"
        >
          <span class="text-center text-color font-medium flex-grow-0 w-4">{{
            empresa.xrazaoSocial
          }}</span>
          <span class="text-center text-color font-medium flex-grow-1 w-7">{{
            empresa.cnpj | cpfCnpj
          }}</span>
          <span class="w-1 text-right cursor-pointer" (click)="refreshClick()">
            <i class="bi bi-arrow-clockwise"></i>
          </span>
        </div>
      </ng-container>
      <ng-template #loading>
        <div
          [ngClass]="{
            'mx-2': responsive.width < 768,
            'w-4 mx-auto': responsive.width >= 768
          }"
          class="flex gap-2 p-2 surface-ground border-round-lg"
        >
          <p-skeleton height="1.2rem" class="flex-grow-0 w-4"></p-skeleton>
          <p-skeleton height="1.2rem" class="flex-grow-1 w-7"></p-skeleton>
          <span class="w-1 text-right opacity-20">
            <i class="bi bi-arrow-clockwise"></i>
          </span>
        </div>
      </ng-template>
    </ng-container>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmpresaBarComponent {
  protected empresa$: Observable<IEmpresa | null>;
  protected responsive$: Observable<IResponsive>;

  constructor(
    private router: Router,
    responsiveService: ResponsiveService,
    private tokensService: TokensService,
    private empresaService: EmpresaService
  ) {
    this.empresa$ = empresaService.chosenEmpresa$.asObservable();
    this.responsive$ = responsiveService.responsive$;
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
