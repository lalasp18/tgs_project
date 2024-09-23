package org.tgs.tgsbackend.service.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.tgs.tgsbackend.model.NotaFiscal;
import org.tgs.tgsbackend.service.dto.NotaFiscalDTO;

@Mapper(componentModel = "spring", uses = {ProdutoMapper.class, UsuarioMapper.class})
public interface NotaFiscalMapper extends EntityMapper<NotaFiscalDTO, NotaFiscal> {

    @Override
    @Mapping(source = "id", target = "id")
    @Mapping(source = "nomeusuario", target = "user.nome")
    NotaFiscal toEntity(NotaFiscalDTO dto);

    @Override
    @Mapping(source = "id", target = "id")
    @Mapping(source = "user.nome", target = "nomeusuario")
    NotaFiscalDTO toDto(NotaFiscal entity);

}
