import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokensService } from "src/app/shared/services/tokens.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class MinhaContaService {
    constructor(
        private http: HttpClient,
        private tokensService: TokensService
    ) {}

    getUser() {      
    }

    mudarSenha(object: {
        email: string;
        senhaAtual: string;
        novaSenha: string;
    }) {
        return this.http.post(
            `http://${environment.api_host}:8083/datasnap/rest/TSMIdentificacao/MudarSenha`,
            object
        );
    }
}
