import { ChangeDetectionStrategy, Component } from "@angular/core";
import { map, Observable } from "rxjs";
import { EmpresaService } from "src/app/pages/home/pages/empresa/services/empresa.service";

@Component({
  selector: "app-empresa-bar",
  template: `
    <ng-container *ngIf="empresa$ | async as empresa; else loading">
      <span class="text-color">{{ empresa }}</span>
    </ng-container>
    <ng-template #loading>
      <div class="w-4 gap-2 flex">
        <p-skeleton height="1.2rem" class="w-3"></p-skeleton>
        <p-skeleton height="1.2rem" class="w-3"></p-skeleton>
        <p-skeleton height="1.2rem" class="w-6"></p-skeleton>
      </div>
    </ng-template>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmpresaBarComponent {
  protected empresa$: Observable<String | null>;

  constructor(empresaService: EmpresaService) {
    this.empresa$ = empresaService.selectedEmpresa$.asObservable().pipe(
      map((empresa) => {
        if (!empresa) return null;

        return `${empresa.xrazaoSocial} | ${empresa.xfant} | ${this.formatCnpj(
          empresa.cnpj
        )}`;
      })
    );
  }

  private formatCnpj(cnpj: String): String {
    return `${cnpj.substring(0, 2)}.${cnpj.substring(2, 5)}.${cnpj.substring(
      5,
      8
    )}/${cnpj.substring(8, 12)}-${cnpj.substring(12)}`;
  }
}
