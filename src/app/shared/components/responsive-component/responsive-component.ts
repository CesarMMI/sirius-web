import { Observable } from "rxjs";
import { IResponsive, ResponsiveService } from "../../services/responsive.service";

export class ResponsiveComponent {

    protected responsive$: Observable<IResponsive>

    constructor(responsiveService: ResponsiveService) {
        this.responsive$ = responsiveService.responsive$;
    }

}
