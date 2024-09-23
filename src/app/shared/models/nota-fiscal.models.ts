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

  adicionarProduto(produto: ProdutoCacau): void {
    this.produtos.push(produto);
    this.calcularTotal();
  }

  definirUser(user: Usuario): void {
    this.nomeusuario = user;
  }

  calcularTotal(): void {
    this.total = this.produtos.reduce((acc, produto) => acc + produto.valor, 0);
  }
}
