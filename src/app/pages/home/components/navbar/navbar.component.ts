import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-navbar",
  template: `
    <div class="surface-0 h-full shadow-1 border-round-md overflow-hidden">
      <p-menu [model]="items"></p-menu>
    </div>
  `,
  styles: [
    ":host ::ng-deep .p-menu{padding: 0;background:transparent;border: none;border-radius:0;}",
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  protected expandMenu = new BehaviorSubject<boolean>(false);

  protected items: MenuItem[] = [
    {
      label: "Cadastros",
      items: [
        {
          label: "Usuários",
          icon: "bi bi-person-lines-fill",
        },
        {
          label: "Clientes",
          icon: "bi bi-people-fill",
        },
        {
          label: "Produtos",
          icon: "bi bi-box",
        },
        {
          label: "Vendedores",
          icon: "bi bi-person-badge",
        },
        {
          label: "Fornecedores",
          icon: "bi bi-truck",
        },
      ],
    },
    {
      label: "Compras",
      items: [
        {
          label: "Pedidos de Compra",
          icon: "bi bi-basket-fill",
        },
      ],
    },
    {
      label: "Vendas",
      items: [
        {
          label: "Notas Fiscais",
          icon: "bi bi-receipt",
        },
      ],
    },
    {
      label: "Financeiro",
      items: [
        {
          label: "Receber",
          icon: "bi bi-box-arrow-in-left",
        },
        {
          label: "Pagar",
          icon: "bi bi-box-arrow-right",
        },
      ],
    },
  ];

  constructor() {}
}
