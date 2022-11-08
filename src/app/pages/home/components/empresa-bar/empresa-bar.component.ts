import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { IEmpresa } from "src/app/pages/home/pages/empresa/models/Empresa";
import { EmpresaService } from "src/app/pages/home/pages/empresa/services/empresa.service";
import { ResponsiveService } from "src/app/shared/services/responsive.service";
import { TokensService } from "src/app/shared/services/tokens.service";

@Component({
  selector: "app-empresa-bar",
  template: `
    <div class="h-full flex justify-content-center align-items-center">
      <ng-container *ngIf="mediaBreakpoint$ | async as mediaBreakpoint">
      <ng-container *ngIf="empresa$ | async as empresa; else loading">
        <div
          class="gap-2 p-2 flex text-color font-bold opacity-80 border-round-xl surface-100"
        >
          <span>{{ empresa.xrazaoSocial }}</span>
          <span> | </span>
          <span>{{ empresa.xfant }}</span>
          <span> | </span>
          <span>{{ empresa.cnpj }}</span>
          <span class="pl-3 cursor-pointer" (click)="refreshClick()">
            <i class="bi bi-arrow-clockwise"></i>
          </span>
        </div>
      </ng-container>
      <ng-template #loading>
        <div
          [ngClass]="{
            'w-10':
              mediaBreakpoint == 'xs',
            'w-8':
              mediaBreakpoint == 'sm'
          }"
          class="w-3 gap-2 p-2 flex border-round-xl surface-100">
          <p-skeleton height="1.2rem" class="w-3"></p-skeleton>
          <p-skeleton height="1.2rem" class="w-3"></p-skeleton>
          <p-skeleton height="1.2rem" class="w-6"></p-skeleton>
          <span class="pl-3 opacity-20">
            <i class="bi bi-arrow-clockwise"></i>
          </span>
        </div>
      </ng-template>
      </ng-container>
      
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmpresaBarComponent {

  protected empresa$: Observable<IEmpresa | null>;
  protected mediaBreakpoint$: Observable<string | null>;
  
  constructor(
    responsiveService: ResponsiveService,
    private router: Router,
    private tokensService: TokensService,
    private empresaService: EmpresaService,
    ) {
      this.empresa$ = empresaService.chosenEmpresa$.asObservable();
      this.mediaBreakpoint$ = responsiveService.mediaBreakpoint$;
  }

  protected refreshClick(): void {
    this.empresaService.chosenEmpresa$.next(null);
    this.tokensService.token = "";
    this.router.navigate(["/home/empresas"]);
  }
}
