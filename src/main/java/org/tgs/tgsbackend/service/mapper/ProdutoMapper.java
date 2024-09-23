package org.tgs.tgsbackend.service.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.tgs.tgsbackend.model.Produto;
import org.tgs.tgsbackend.service.dto.ProdutoDTO;

@Mapper(componentModel = "spring")
public interface ProdutoMapper extends EntityMapper<ProdutoDTO, Produto> {

    @Override
    @Mapping(source = "id", target = "id")
    Produto toEntity(ProdutoDTO dto);

    @Override
    @Mapping(source = "id", target = "id")
    ProdutoDTO toDto(Produto entity);

}
