import { Usuario } from "./usuario.models";
import { ProdutoCacau } from "./produto-cacau.models";

export class NotaFiscal {
  id: number | null;
  nomeusuario: Usuario | null;
  produtos: ProdutoCacau[];
  total: number;

  constructor() {
    this.id = null;
    this.nomeusuario = null;
    this.produtos = [];
    this.total = 0;
  }

}

export interface ProdutoResumo {
  nome: string;
  valor: number;
  quantidade: number;
  total: number;
}
