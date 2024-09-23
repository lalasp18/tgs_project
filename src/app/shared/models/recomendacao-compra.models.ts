import {NotaFiscal} from "./nota-fiscal.models";
import {ProdutoCacau} from "./produto-cacau.models";

export interface RecomendacaoCompra {
  id: number;
  compras: NotaFiscal;
  mensagemMarketing: string;
  produtosRecomendados: ProdutoCacau[];
}
