import {Usuario} from "./usuario.models";
import {ProdutoCacau} from "./produto-cacau.models";

export interface NotaFiscal {
  id: number;
  nomeusuario: Usuario;
  produtos: ProdutoCacau[];
  total: number;
}
