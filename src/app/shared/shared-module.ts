import {NgModule} from "@angular/core";
import {DialogService} from "primeng/dynamicdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {PRIMENG_IMPORTS} from "./imports/prime-imports";
import {ANGULAR_IMPORTS} from "./imports/angular-imports";
import {ServiceModule} from "./services/service.module";

const MODULE_PROVIDERS: any = [
  DialogService,
  ConfirmationService,
  MessageService,
];

@NgModule({
  declarations: [],
  imports: [
    PRIMENG_IMPORTS,
    ANGULAR_IMPORTS,
    ServiceModule,
  ],
  providers: [MODULE_PROVIDERS],
  exports: [
    PRIMENG_IMPORTS,
    ANGULAR_IMPORTS,
  ]
})
export class SharedModule { }
