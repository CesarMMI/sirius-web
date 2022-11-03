import { HttpClient } from "@angular/common/http";

export interface IApiEndPoints {
    getAll?: string
    getById?: string
    post?: string
    put?: string
    delete?: string
}

export class CrudService {
    constructor(
        protected http: HttpClient,
        private API_URL: string,
        private apiEndPoints: IApiEndPoints
    ) { }

    get(page: number, quantityPerPage: number) {
        return this.http.get(`${this.API_URL}/${this.apiEndPoints.getAll}`, {
            params: {
                pag: page,
                qtdItensPag: quantityPerPage
            }
        })
    }
}