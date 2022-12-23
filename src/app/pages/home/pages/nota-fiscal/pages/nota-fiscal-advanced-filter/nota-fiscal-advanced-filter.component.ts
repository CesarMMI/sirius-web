import { Component, OnDestroy } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { first, map, Subscription, switchMap } from "rxjs";
import { FilterAdvancedService } from "src/app/shared/components/buttons/filter-popup/filter-advanced/services/filter-advanced.service";
import { IDropdownItem } from "src/app/shared/components/custom-form/models/DropdownItem";
import { AdvancedFilterForm } from "src/app/shared/components/models/advanced-filter-form/advanced-filter-form";
import { EnderecoService } from "src/app/shared/services/endereco/endereco.service";

import { NotaFiscalService } from "../../services/nota-fiscal.service";

@Component({
    templateUrl: "./nota-fiscal-advanced-filter.component.html",
})
export class NotaFiscalAdvancedFilterComponent
    extends AdvancedFilterForm
    implements OnDestroy
{
    constructor(
        enderecoService: EnderecoService,
        protected formBuilder: FormBuilder,
        protected notaFiscalService: NotaFiscalService,
        override filterAdvancedService: FilterAdvancedService
    ) {
        super(
            formBuilder.group({
                orderBy: "Id",
                desc: false,
                status: null,

                // intervalo
                minId: null,
                maxId: null,
                // fim intervalo

                // intervalo
                minSerie: null,
                maxSerie: null,
                // fim intervalo

                // intervalo
                minChave: null,
                maxChave: null,
                // fim intervalo

                DhEmi: null,
                // intervalo
                minDhEmi: null,
                maxDhEmi: null,
                // fim intervalo

                destxnome: null,
                destcnpjcpf: null,
                enderdestuf: null,
                enderdestxmun: null,
            }),
            filterAdvancedService
        );
        // Observable UFs
        this.enderecosSub.push(
            enderecoService
                .getUFs()
                .pipe(
                    first(),
                    map((ufs) => {
                        const arr: IDropdownItem[] = [];
                        for (const uf of ufs) {
                            arr.push({
                                label: uf.nome,
                                value: uf.sigla,
                            });
                        }
                        return arr;
                    })
                )
                .subscribe((res) => (this.ufs = res))
        );
        // Observable Municipios
        this.enderecosSub.push(
            this.form
                .get("enderdestuf")!
                .valueChanges.pipe(
                    switchMap((uf: string) =>
                        enderecoService.getMunicipiosByUF(uf)
                    ),
                    map((res) => {
                        const arr: IDropdownItem[] = [];
                        for (const muncipio of res) {
                            arr.push({
                                label: muncipio,
                                value: muncipio,
                            });
                        }
                        return arr;
                    })
                )
                .subscribe((value) => (this.municipios = value))
        );
    }

    protected tipoCliente: FormControl = this.formBuilder.control("F");
    protected get isPF(): boolean {
        return this.tipoCliente.value === "F";
    }

    enderecosSub: Subscription[] = [];
    protected ufs: IDropdownItem[] = [];
    protected municipios: IDropdownItem[] = [];

    ngOnDestroy(): void {
        for (const sub of this.enderecosSub) {
            sub.unsubscribe();
        }
    }

    protected override onFilter(): void {
        // Recupera datas
        let datas: Date[] = this.form.get("DhEmi")!.value;
        // Cria objeto
        let obj = {
            ...this.form.getRawValue(),
        };
        if (datas) {
            obj["minDhEmi"] = datas[0].toISOString();
            obj["maxDhEmi"] = datas[1].toISOString();
        }
        delete obj["DhEmi"];

        super.onFilter(obj);
    }
}
