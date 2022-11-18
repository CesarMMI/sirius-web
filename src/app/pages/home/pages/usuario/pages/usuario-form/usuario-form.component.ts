import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-usuario-form",
  template: `
    <app-form-wrapper title="Usuário" [showLock]="false">
      <p-tabMenu [model]="items"></p-tabMenu>
      <router-outlet></router-outlet>
    </app-form-wrapper>
  `,
  styles: [],
})
export class UsuarioFormComponent {
  constructor() {}

  items: MenuItem[] = [
    { label: "Geral", icon: "bi bi-person-vcard", routerLink: "geral" },
    { label: "Endereços", icon: "bi bi-houses", routerLink: "enderecos" },
  ];
}
