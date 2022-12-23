import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { first, map, Observable, tap } from "rxjs";
import { IUF } from "./models/uf";

@Injectable({
    providedIn: "root",
})
export class EnderecoService {
    constructor(private http: HttpClient) {}

    public searchByCep(cep: string) {
        return this.http
            .get(`https://viacep.com.br/ws/${cep}/json`)
            .pipe(first());
    }

    public getUFs(): Observable<IUF[]> {
        return this.http
            .get<
                {
                    id: number;
                    sigla: string;
                    nome: string;
                    regiao: {
                        id: number;
                        sigla: string;
                        nome: string;
                    };
                }[]
            >("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
            .pipe(
                first(),
                map((res) => {
                    const UFarr: IUF[] = [];
                    for (const uf of res) {
                        UFarr.push({
                            nome: uf.nome,
                            sigla: uf.sigla,
                        });
                    }
                    return UFarr.sort((a, b) => {
                        return a.nome.localeCompare(b.nome);
                    });
                })
            );
    }

    public getMunicipiosByUF(uf: string): Observable<string[]> {
        return this.http
            .get<
                {
                    id: number;
                    nome: string;
                }[]
            >(
                `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
            )
            .pipe(
                first(),
                map((res) => {
                    const arr: string[] = [];
                    for (const municipio of res) {
                        arr.push(municipio.nome);
                    }
                    return arr.sort((a, b) => {
                        return a.localeCompare(b);
                    });
                })
            );
    }
}
