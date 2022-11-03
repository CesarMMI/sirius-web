import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-nav-bar",
  template: `
    <app-simple-wrapper>
      <p-slideMenu [model]="items"></p-slideMenu>
    </app-simple-wrapper>
  `,
  styleUrls: ["./nav-bar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit {
  protected items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: "Cadastros",
        icon: "bi bi-clipboard-data",
        items: [
          {
            label: "Empresas",
            icon: "bi bi-building",
            routerLink: "/home/empresas"
          },
          {
            separator: true,
          },
          {
            label: "Produtos",
            icon: "bi bi-box",
            routerLink: "/home/produtos"
          },
        ],
      },
      {
        label: "Compras",
        icon: "bi bi-cart",
        items: [
          
        ],
      },
      {
        label: "Vendas",
        icon: "bi bi-truck",
        items: [
          
        ],
      },
      {
        label: "Configurações",
        icon: "bi bi-gear",
        items: [
          
        ],
      },
      {
        separator: true,
      },
      {
        label: "Sair",
        icon: "bi bi-power",
      },
    ];
  }
}
