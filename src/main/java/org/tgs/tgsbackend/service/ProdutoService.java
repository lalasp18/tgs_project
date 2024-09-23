package org.tgs.tgsbackend.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.tgs.tgsbackend.model.Produto;
import org.tgs.tgsbackend.repository.ProdutoRepository;
import org.tgs.tgsbackend.service.dto.ProdutoDTO;
import org.tgs.tgsbackend.service.mapper.ProdutoMapper;
import org.tgs.tgsbackend.util.MensagemProdutoUtil;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Transactional
public class ProdutoService {

    private final ProdutoRepository repository;
    private final ProdutoMapper mapper;

    public List<Produto> listarEntidades() {
        return repository.findAll();
    }

    public List<ProdutoDTO> listar() {
        return mapper.toDto(listarEntidades());
    }

    public List<ProdutoDTO> listarSecaoChocolate() {
        return mapper.toDto(repository.buscarPorSecao("Chocolate"));
    }

    public List<ProdutoDTO> listarSecaoCafeteria() {
        return mapper.toDto(repository.buscarPorSecao("Cafeteria"));
    }

    public List<ProdutoDTO> listarSecaoMarcas() {
        return mapper.toDto(repository.buscarPorSecao("Marcas"));
    }

    public Produto buscarPorIdEntidade(Integer id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, MensagemProdutoUtil.NAO_ENCONTRADO));
    }

    public ProdutoDTO buscarPorId(Integer id) {
        return mapper.toDto(buscarPorIdEntidade(id));
    }

    public ProdutoDTO salvar(ProdutoDTO dto) {
        if(Objects.nonNull(dto.getId())) {
            Produto entity = repository.save(mapper.toEntity(dto));
            return mapper.toDto(entity);
        } else {
            return mapper.toDto(repository.save(mapper.toEntity(dto)));
        }
    }

    public void deletar(Integer id) {
        Produto entity = buscarPorIdEntidade(id);
        repository.delete(entity);
    }
}
