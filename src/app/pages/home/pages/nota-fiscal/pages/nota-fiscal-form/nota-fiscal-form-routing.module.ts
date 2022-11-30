import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotaFiscalFormComponent } from "./nota-fiscal-form.component";
import { NotaFiscalFormDestinatarioComponent } from "./pages/nota-fiscal-form-destinatario/nota-fiscal-form-destinatario.component";
import { NotaFiscalFormGeralComponent } from "./pages/nota-fiscal-form-geral/nota-fiscal-form-geral.component";
import { NotaFiscalFormInfosComponent } from "./pages/nota-fiscal-form-infos/nota-fiscal-form-infos.component";
import { NotaFiscalFormRetornowsComponent } from "./pages/nota-fiscal-form-retornows/nota-fiscal-form-retornows.component";
import { NotaFiscalFormTotalizadoresComponent } from "./pages/nota-fiscal-form-totalizadores/nota-fiscal-form-totalizadores.component";

const routes: Routes = [
    {
        path: "",
        component: NotaFiscalFormComponent,
        children: [
            { path: "", redirectTo: "geral", pathMatch: "full" },
            { path: "geral", component: NotaFiscalFormGeralComponent },
            {
                path: "destinatario",
                component: NotaFiscalFormDestinatarioComponent,
            },
            { path: "infos", component: NotaFiscalFormInfosComponent },
            {
                path: "totalizadores",
                component: NotaFiscalFormTotalizadoresComponent,
            },
            { path: "retornows", component: NotaFiscalFormRetornowsComponent },
            {
                path: "itens",
                loadChildren: () =>
                    import(
                        "./pages/nota-fiscal-itens/nota-fiscal-itens.module"
                    ).then((m) => m.NotaFiscalItensModule),
            },
            {
                path: "pagamentos",
                loadChildren: () =>
                    import(
                        "./pages/nota-fiscal-pagamentos/nota-fiscal-pagamentos.module"
                    ).then((m) => m.NotaFiscalPagamentosModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NotaFiscalFormRoutingModule {}
