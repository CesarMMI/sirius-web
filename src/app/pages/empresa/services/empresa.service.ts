import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import {
  BehaviorSubject,
  catchError,
  first,
  map,
  Observable,
  throwError,
} from "rxjs";
import { IEmpesa } from "src/app/pages/empresa/models/Empresa";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class EmpresaService {
  private baseUrl = `http://${environment.api_host}:8083/datasnap/rest/TSMEmpresa/`;
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  protected empresas$ = new BehaviorSubject<ITableData>({
    data: [],
    totalPages: 0,
  });

  public get(): Observable<ITableData> {
    return this.empresas$;
  }

  public getById(id: number): IEmpesa | undefined {
    console.log(this.empresas$.value.data);
    return this.empresas$.value.data.find((empresa: any) => id === empresa.id);
  }

  public create(empresa: IEmpesa) {
    return this.http.post(`${this.baseUrl}Empresa`, empresa).pipe(
      first(),
      catchError((err) => {
        this.toastError(err, "Não foi possível cadastrar a empresa");
        return throwError(() => new Error(err));
      })
    );
  }

  public refresh(): void {
    this.http
      .get<ITableData>(`${this.baseUrl}GetEmpresas`)
      .pipe(
        first(),
        map((response: any) => {
          return {
            data: response["empresas"],
            totalPages: response["QtdPaginas"],
          };
        })
      )
      .subscribe({
        next: (data) => {
          this.empresas$.next(data);
        },
        error: (err) =>
          this.toastError(err, "Não foi possível recuperar as empresas"),
      });
  }

  private toastError(err: any, defaultMsg: string) {
    this.messageService.add({
      key: "global",
      severity: "error",
      summary: err.error?.erro || defaultMsg,
      detail: `${err.statusText || "Erro"} ${err.status}`,
    });
  }
}
