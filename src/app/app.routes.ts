import { Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {ChocolateComponent} from "./modules/chocolate/chocolate.component";
import {CafeteriaComponent} from "./modules/cafeteria/cafeteria.component";
import {NotaFiscalComponent} from "./modules/nota-fiscal/nota-fiscal.component";

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'categoria/chocolate', component: ChocolateComponent },
  { path: 'categoria/cafeteria', component: CafeteriaComponent },
  { path: 'nota-fiscal/recomenda', component: NotaFiscalComponent },

];
