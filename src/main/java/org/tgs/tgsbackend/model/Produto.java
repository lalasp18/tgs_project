package org.tgs.tgsbackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "produto")
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_produto")
    @SequenceGenerator(name = "seq_produto", sequenceName = "seq_produto", allocationSize = 1)
    private Integer id;

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name = "categoria", nullable = false)
    private String categoria;

    @Column(name = "temporada", nullable = false)
    private String temporada;

    @Column(name = "valor", nullable = false)
    private Double valor;

    @Column(name = "promocao")
    private Double promocao;

    @Column(name = "foto", nullable = false)
    private String foto;

    @Column(name = "secao-aba", nullable = false)
    private String secaoAba;
}
