import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FileUploadModule } from "primeng/fileupload";
import { MessageModule } from "primeng/message";
import { CustomFormModule } from "src/app/shared/components/custom-form/custom-form.module";

import { CertificadoRoutingModule } from "./certificado-routing.module";
import { CertificadoComponent } from "./certificado.component";

@NgModule({
    declarations: [CertificadoComponent],
    imports: [
        CommonModule,
        CertificadoRoutingModule,
        ReactiveFormsModule,
        CustomFormModule,
        FileUploadModule,
        MessageModule,
    ],
})
export class CertificadoModule {}
