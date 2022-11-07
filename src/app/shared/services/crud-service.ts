import { HttpClient } from "@angular/common/http";
import { delay } from "rxjs";

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
        }).pipe(delay(500))
    }

    getById(id: number) {
        return this.http.get(`${this.API_URL}/${this.apiEndPoints.getById}/${id}`)
    }

    create(subject: any) {
        return this.http.post(`${this.API_URL}/${this.apiEndPoints.post}`, subject)
    }

    update(subject: any) {
        return this.http.put(`${this.API_URL}/${this.apiEndPoints.put}`, subject)
    }
}