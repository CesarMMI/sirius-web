import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IPermissoes } from "./models/permissoes";
import { IUserInfo } from "./models/user-info";

@Injectable({
    providedIn: "root",
})
export class UserInfoService {
    constructor() {}

    private userInfoSubject$ = new BehaviorSubject<IUserInfo | null>(null);

    public get userInfo$() {
        return this.userInfoSubject$.asObservable();
    }
    
    public get userInfoValue() {
        return this.userInfoSubject$.value;
    }

    public setUserInfo(userInfo: IUserInfo) {
        this.userInfoSubject$.next({
            ...userInfo,
            permissoes: this.formatPermissoesObject(userInfo.permissoes),
        });
    }

    private formatPermissoesObject(permissoes: any): IPermissoes {
        let newPermissoes: any = {};
        for (const permissao of permissoes) {
            newPermissoes[permissao["tabela"]] = {
                ...newPermissoes[permissao["tabela"]],
                [permissao["desc"]]: permissao["permite"],
            };
        }
        return newPermissoes;
    }
}
