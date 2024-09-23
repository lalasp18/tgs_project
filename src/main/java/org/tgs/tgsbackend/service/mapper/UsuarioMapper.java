package org.tgs.tgsbackend.service.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.tgs.tgsbackend.model.Usuario;
import org.tgs.tgsbackend.service.dto.UsuarioDTO;

@Mapper(componentModel = "spring", uses = {NotaFiscalMapper.class})
public interface UsuarioMapper extends EntityMapper<UsuarioDTO, Usuario> {

    @Override
    @Mapping(source = "nome", target = "nome")
    Usuario toEntity(UsuarioDTO dto);

    @Override
    @Mapping(source = "nome", target = "nome")
    UsuarioDTO toDto(Usuario entity);

}
