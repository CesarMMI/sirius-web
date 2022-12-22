import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { INavbarItem } from "src/app/pages/home/components/nav-bar/models/NavbarItem";
import { EmpresaService } from "src/app/pages/home/pages/empresa/services/empresa.service";
import { ResponsiveService } from "src/app/shared/services/responsive.service";
import { TokensService } from "src/app/shared/services/tokens.service";
import { IPermissoes } from "src/app/shared/services/user-info/models/permissoes";
import { UserInfoService } from "src/app/shared/services/user-info/user-info.service";

@Component({
    selector: "app-nav-bar",
    template: `
        <div class="pt-3 h-full">
            <ng-container *ngIf="!(showChildren$ | async); else childrenView">
                <ng-container *ngFor="let item of items">
                    <app-nav-bar-item
                        [item]="item"
                        (clickEvent)="parentEvent($event)"
                    ></app-nav-bar-item>
                </ng-container>
            </ng-container>
            <ng-template #childrenView>
                <ng-container
                    *ngFor="let item of currentParent$.value?.children"
                >
                    <app-nav-bar-item
                        [item]="item"
                        (clickEvent)="parentEvent($event)"
                    ></app-nav-bar-item>
                </ng-container>
                <app-nav-bar-item
                    class="mt-auto"
                    (clickEvent)="backEvent()"
                ></app-nav-bar-item>
            </ng-template>
        </div>
    `,
    styleUrls: ["./nav-bar.component.scss"],
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnDestroy {
    constructor(
        private router: Router,
        private tokensService: TokensService,
        private empresaService: EmpresaService,
        private userInfoService: UserInfoService
    ) {
        // Router Observable
        this.routerSub = router.events.subscribe(() => this.backEvent());
        // Permissoes Observable
        this.userInfoSub = userInfoService.userInfo$.subscribe((userInfo) => {
            if (userInfo && userInfo.permissoes) {
                this.generateMenuItems(userInfo.permissoes);
            }
        });
    }
    private userInfoSub: Subscription;

    private routerSub: Subscription;
    protected showChildren$ = new BehaviorSubject<boolean>(false);
    protected currentParent$ = new BehaviorSubject<INavbarItem | null>(null);

    protected items: INavbarItem[] = [
        {
            visible: true,
            label: "Sair",
            icon: "bi bi-power",
            action: () => this.onExit(),
        },
    ];

    ngOnDestroy(): void {
        this.routerSub.unsubscribe();
    }

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

    private generateMenuItems(permissoes: IPermissoes): void {
        this.items = [
            {
                visible: true,
                label: "Cadastros",
                children: [
                    {
                        visible: true,
                        label: "Empresas",
                        router: "/empresas",
                        icon: "bi bi-building",
                    },
                    {
                        label: "Usuários",
                        icon: "bi bi-person-lines-fill",
                        router: "/usuarios",
                        visible: permissoes.usuarios.read,
                    },
                    {
                        label: "Clientes",
                        icon: "bi bi-people-fill",
                        router: "clientes",
                        visible: permissoes.clientes.read,
                    },
                    {
                        label: "Produtos",
                        icon: "bi bi-box",
                        router: "produtos",
                        visible: permissoes.produtos.read,
                    },
                    {
                        label: "Vendedores",
                        icon: "bi bi-person-badge",
                        router: "vendedores",
                        visible: permissoes.vendedores.read,
                    },
                    {
                        label: "Fornecedores",
                        icon: "bi bi-truck",
                        router: "fornecedores",
                        visible: permissoes.fornecedores.read,
                    },
                ],
            },
            {
                visible: permissoes.pedidosCompra.read,
                label: "Compras",
                children: [
                    {
                        icon: "bi bi-basket-fill",
                        router: "pedidos-compra",
                        label: "Pedidos de Compra",
                        visible: permissoes.pedidosCompra.read,
                    },
                ],
            },
            {
                visible:
                    permissoes.notasFiscais.read ||
                    permissoes.pedidosVenda.read,
                label: "Vendas",
                children: [
                    {
                        label: "Notas Fiscais",
                        icon: "bi bi-receipt",
                        router: "notas-fiscais",
                        visible: permissoes.notasFiscais.read,
                    },
                    {
                        label: "Pedidos de Venda",
                        icon: "bi bi-cart-check",
                        router: "pedidos-venda",
                        visible: permissoes.pedidosVenda.read,
                    },
                ],
            },
            {
                visible: permissoes.aReceber.read || permissoes.aPagar.read,
                label: "Financeiro",
                children: [
                    {
                        label: "A Receber",
                        icon: "bi bi-box-arrow-in-left",
                        router: "recebimentos",
                        visible: permissoes.aReceber.read,
                    },
                    {
                        label: "A Pagar",
                        icon: "bi bi-box-arrow-right",
                        router: "pagamentos",
                        visible: permissoes.aPagar.read,
                    },
                ],
            },
            {
                label: "Configurações",
                icon: "bi bi-gear",
                router: "configuracoes",
                visible:
                    permissoes.configuracoes.dadosDaConta ||
                    permissoes.configuracoes.gruposUsuarios ||
                    permissoes.configuracoes.listasPrecos ||
                    permissoes.configuracoes.configuracoesNfe ||
                    permissoes.configuracoes.certificados,
            },
            {
                visible: true,
                label: "Sair",
                icon: "bi bi-power",
                action: () => this.onExit(),
            },
        ];
    }
}
