import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { first, map, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { INfeConfig } from "../models/nfe-config";

@Injectable({
    providedIn: "root",
})
export class NfeConfigService {
    private BASE_URL = `http://${environment.api_host}:8082/datasnap/rest/TSMNFeConfig/`;

    constructor(protected http: HttpClient) {}

    read(): Observable<INfeConfig> {
        return this.http
            .get<{ NFeConfig: INfeConfig }>(`${this.BASE_URL}GetNFeConfig`)
            .pipe(
                first(),
                map((res) => res.NFeConfig)
            );
    }

    create(configs: INfeConfig) {
        return this.http.post(`${this.BASE_URL}NFeConfig`, configs)
        .pipe(first());
    }

    update(configs: INfeConfig) {
        return this.http.put(`${this.BASE_URL}NFeConfig`, configs)
        .pipe(first());
    }
}
