import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient} from "@angular/common/http";
import {UsuarioService} from "./_services/usuario.service";
import {UserAuthService} from "./_services/user-auth.service";
import {TopbarCarrinhoService} from "./shared/services/topbar-carrinho.service";
import {MessageService} from "primeng/api";
import {AlertaService} from "./shared/services/alerta.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    UsuarioService,
    UserAuthService,
    TopbarCarrinhoService,
    MessageService,
    AlertaService
  ]
};
