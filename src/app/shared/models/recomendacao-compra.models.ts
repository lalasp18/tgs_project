import { NotaFiscal } from "./nota-fiscal.models";
import { ProdutoCacau } from "./produto-cacau.models";

export class RecomendacaoCompra {
  id: number | null;
  compras: NotaFiscal;
  mensagemMarketing: string;
  produtosRecomendados: ProdutoCacau[];

  constructor( ) {
    this.id = null;
    this.compras = new NotaFiscal();
    this.mensagemMarketing = '';
    this.produtosRecomendados = [];
  }
}
