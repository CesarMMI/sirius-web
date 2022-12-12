import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MessageService } from "primeng/api";
import { combineLatest, first, Subscription } from "rxjs";
import { combineLatestInit } from "rxjs/internal/observable/combineLatest";
import { ClienteService } from "src/app/pages/home/pages/cliente/services/cliente.service";
import { VendedorService } from "src/app/pages/home/pages/vendedor/services/vendedor.service";
import { FormComponent } from "src/app/shared/components/form-component/form-component";
import { FormLockService } from "src/app/shared/services/form-lock.service";
import { UserInfoService } from "src/app/shared/services/user-info/user-info.service";
import { PedidoVendaService } from "../../../../services/pedido-venda.service";

@Component({
    templateUrl: "./pedido-venda-form-geral.component.html",
    styles: [],
})
export class PedidoVendaFormGeralComponent extends FormComponent<any> {
    constructor(
        formBuilder: FormBuilder,
        public clienteService: ClienteService,
        public vendedorService: VendedorService,
        protected userInfoService: UserInfoService,
        private pedidoVendaService: PedidoVendaService,
        protected override router: Router,
        protected override messageService: MessageService,
        protected override activatedRoute: ActivatedRoute,
        protected override formLockService: FormLockService
    ) {
        super(
            router,
            messageService,
            activatedRoute,
            formLockService,
            "Pedido de Venda",
            "/home/pedidos-venda",
            pedidoVendaService,
            ["id", "dataCriacao", "valorLiquido"],
            formBuilder.group({
                id: { value: null, disabled: true },
                numero: null,
                dataCriacao: { value: null, disabled: true },
                status: null,
                vendedorId: 0,
                clienteId: null,
                valorBruto: null,
                desconto: null,
                valorLiquido: { value: null, disabled: true },
                observacoes: "",
            })
        );
        //
        this.valorSub.push(
            this.form.get("valorBruto")!.valueChanges.subscribe((valor) => {
                this.form
                    .get("valorLiquido")
                    ?.setValue(
                        valor -
                            parseFloat(this.form.get("desconto")?.value || "0")
                    );
            }),
            this.form.get("desconto")!.valueChanges.subscribe((desconto) => {
                this.form
                    .get("valorLiquido")
                    ?.setValue(
                        parseFloat(this.form.get("valorBruto")?.value || "0") -
                            desconto
                    );
            })
        );
        //
        userInfoService.userInfo$.pipe(first()).subscribe((userInfo) => {
            if (userInfo!.vendedorId > 0) {
                this.isVendedor = true;
                this.form.get('vendedorId')?.patchValue(userInfo?.vendedorId);
            }else{
                this.isVendedor = false;

            }
        });
    }

    protected isVendedor?: boolean;

    private valorSub: Subscription[] = [];
    protected vendedorNome = new FormControl("");
    protected clienteNome = new FormControl("");

    onChooseVendedor(event: any) {
        this.vendedorNome.setValue(event["nome"]);
    }

    onChooseCliente(event: any) {
        this.clienteNome.setValue(event["razaoSocial"]);
    }

    override lockEvent(isLocked: boolean): void {
        if (isLocked) {
            this.vendedorNome.disable();
            this.clienteNome.disable();
        } else {
            this.vendedorNome.enable();
            this.clienteNome.enable();
        }
        super.lockEvent(isLocked);
    }

    override ngOnDestroy(): void {
        for (const sub of this.valorSub) {
            sub.unsubscribe();
        }
        super.ngOnDestroy();
    }
}
