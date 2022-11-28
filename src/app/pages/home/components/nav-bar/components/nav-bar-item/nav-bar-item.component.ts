import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { INavbarItem } from 'src/app/pages/home/components/nav-bar/models/NavbarItem';



@Component({
  selector: 'app-nav-bar-item',
  template: `
    <button
      pButton
      [label]="item.label"
      (click)="click(item)"
      iconPos="right"
      [icon]="item.icon ? item.icon : 'bi bi-chevron-right'"
      class="w-full p-button-text p-button-secondary p-button-sm"
      ></button>
      `,
  styleUrls: ['./nav-bar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarItemComponent {
  @Input() item: INavbarItem = {
    label: 'Voltar',
    icon: "bi bi-chevron-left"
  };

  @Output() clickEvent = new EventEmitter<INavbarItem>();
  constructor(
    private router: Router
  ) { }

  protected click(item: INavbarItem) {
    if (item.action) {
      item.action()
      return;
    }
    if (item.router) {
      this.router.navigate([`/home/${item.router}`])
      return;
    }
    this.clickEvent.emit(item);
  }

}
