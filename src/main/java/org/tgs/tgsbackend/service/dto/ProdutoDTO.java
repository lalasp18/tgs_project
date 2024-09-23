package org.tgs.tgsbackend.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ProdutoDTO {

    private Integer id;

    private String nome;

    private String categoria;

    private String temporada;

    private Double valor;

    private Double promocao;

    private String foto;

    private String secaoAba;

}
