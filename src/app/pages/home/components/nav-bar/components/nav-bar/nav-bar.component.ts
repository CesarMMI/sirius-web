import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { INavbarItem } from "src/app/pages/home/components/nav-bar/models/NavbarItem";
import { EmpresaService } from "src/app/pages/home/pages/empresa/services/empresa.service";
import { TokensService } from "src/app/shared/services/tokens.service";

@Component({
  selector: "app-nav-bar",
  template: `
    <div class="pt-3">
      <ng-container *ngIf="!(showChildren$ | async); else childrenView">
        <ng-container *ngFor="let item of items">
          <app-nav-bar-item
            [item]="item"
            (clickEvent)="parentEvent($event)"
          ></app-nav-bar-item>
        </ng-container>
      </ng-container>
      <ng-template #childrenView>
        <ng-container *ngFor="let item of currentParent$.value?.children">
          <app-nav-bar-item
            [item]="item"
            (clickEvent)="parentEvent($event)"
          ></app-nav-bar-item>
        </ng-container>
        <app-nav-bar-item (clickEvent)="backEvent()"></app-nav-bar-item>
      </ng-template>
    </div>
  `,
  styleUrls: ["./nav-bar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  constructor(
    private router: Router,
    private tokensService: TokensService,
    private empresaService: EmpresaService
  ) {}

  protected showChildren$ = new BehaviorSubject<boolean>(false);
  protected currentParent$ = new BehaviorSubject<INavbarItem | null>(null);

  protected items: INavbarItem[] = [
    {
      label: "Cadastros",
      children: [
        {
          label: "Empresas",
          router: "/empresas",
          icon: "bi bi-building",
        },
        {
          label: "Usuários",
          icon: "bi bi-person-lines-fill",
          router: "usuarios",
        },
        {
          label: "Clientes",
          icon: "bi bi-people-fill",
          router: "clientes",
        },
        {
          label: "Produtos",
          icon: "bi bi-box",
          router: "produtos",
        },
        {
          label: "Vendedores",
          icon: "bi bi-person-badge",
          router: "vendedores",
        },
        {
          label: "Fornecedores",
          icon: "bi bi-truck",
          router: "fornecedores",
        },
      ],
    },
    {
      label: "Compras",
      children: [
        {
          icon: "bi bi-basket-fill",
          router: "financeiro/pedidos-compra",
          label: "Pedidos de Compra",
        },
      ],
    },
    {
      label: "Vendas",
      children: [
        {
          label: "Notas Fiscais",
          icon: "bi bi-receipt",
          router: "notas-fiscais",
        },
        {
          label: "Pedidos de Venda",
          icon: "bi bi-cart-check",
          router: "pedidos-venda",
        },
      ],
    },
    {
      label: "Financeiro",
      children: [
        {
          label: "A Receber",
          icon: "bi bi-box-arrow-in-left",
          router: "financeiro/recebimentos",
        },
        {
          label: "A Pagar",
          icon: "bi bi-box-arrow-right",
          router: "financeiro/pagamentos",
        },
      ],
    },
    {
      label: "Sair",
      icon: "bi bi-power",
      action: () => this.onExit(),
    },
  ];

  protected parentEvent(event: INavbarItem): void {
    this.currentParent$.next(event);
    this.showChildren$.next(true);
  }

  protected backEvent(): void {
    this.showChildren$.next(false);
    this.currentParent$.next(null);
  }

  protected onExit(): void {
    this.empresaService.chosenEmpresa$.next(null);
    this.tokensService.userToken = "";
    this.tokensService.token = "";
    this.router.navigate(["/auth"]);
  }
}
