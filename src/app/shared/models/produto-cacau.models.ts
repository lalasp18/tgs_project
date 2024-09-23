export class ProdutoCacau {
  id: number;
  nome: string;
  foto: string;
  secaoAba: string;
  valor: number;
  promocao: number;
  categoria: string;
  temporada: string;

  constructor(
    id: number,
    nome: string,
    foto: string,
    secaoAba: string,
    valor: number,
    promocao: number,
    categoria: string,
    temporada: string
  ) {
    this.id = id;
    this.nome = nome;
    this.foto = foto;
    this.secaoAba = secaoAba;
    this.valor = valor;
    this.promocao = promocao;
    this.categoria = categoria;
    this.temporada = temporada;
  }
}
