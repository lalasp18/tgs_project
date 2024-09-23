package org.tgs.tgsbackend.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class NotaFiscalDTO {

    private Integer id;

    private UsuarioDTO nomeusuario;

    private List<ProdutoDTO> produtos = new ArrayList<>();

    private Double total;
}
