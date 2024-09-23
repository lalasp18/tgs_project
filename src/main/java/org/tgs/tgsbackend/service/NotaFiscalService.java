package org.tgs.tgsbackend.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.tgs.tgsbackend.model.NotaFiscal;
import org.tgs.tgsbackend.model.Usuario;
import org.tgs.tgsbackend.repository.NotaFiscalRepository;
import org.tgs.tgsbackend.repository.ProdutoRepository;
import org.tgs.tgsbackend.service.dto.NotaFiscalDTO;
import org.tgs.tgsbackend.service.dto.ProdutoDTO;
import org.tgs.tgsbackend.service.dto.RecomendacaoDTO;
import org.tgs.tgsbackend.service.mapper.NotaFiscalMapper;
import org.tgs.tgsbackend.service.mapper.ProdutoMapper;
import org.tgs.tgsbackend.util.MensagemNotaFiscalUtil;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class NotaFiscalService {

    private final NotaFiscalRepository repository;
    private final ProdutoRepository produtoRepository;
    private final NotaFiscalMapper mapper;
    private final ProdutoMapper produtoMapper;
    private final UsuarioService userService;

    public List<NotaFiscal> listarEntidades() {
        return repository.findAll();
    }

    public List<NotaFiscalDTO> listar() {
        return mapper.toDto(listarEntidades());
    }

    public NotaFiscal buscarPorIdEntidade(Integer id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, MensagemNotaFiscalUtil.NAO_ENCONTRADO));
    }

    public NotaFiscalDTO buscarPorId(Integer id) {
        return mapper.toDto(buscarPorIdEntidade(id));
    }

    public RecomendacaoDTO salvar(NotaFiscalDTO dto) {
        String user = dto.getNomeusuario().getNome();
        dto.setNomeusuario(userService.buscarPorNome(user));

        NotaFiscal entity = mapper.toEntity(dto);
        Usuario usuario = userService.buscarPorNomeEntidade(user);
        entity.setUser(usuario);
        entity = repository.save(entity);

        RecomendacaoDTO dtoSalvo = recomendacaoClienteProdutos(mapper.toDto(entity));
            return dtoSalvo;
    }

    public RecomendacaoDTO recomendacaoClienteProdutos(NotaFiscalDTO dto) {
        RecomendacaoDTO dtoRecomenda = new RecomendacaoDTO(dto);
        dtoRecomenda.getProdutosRecomendados().clear();
        dtoRecomenda.getProdutosRecomendados().addAll(recomendarProdutos(dto.getProdutos(), dtoRecomenda.getTemporada()));
        return dtoRecomenda;
    }

    private List<ProdutoDTO> recomendarProdutos(List<ProdutoDTO> dtoList, String temporada) {
        Set<ProdutoDTO> recomendados = new HashSet<>();

        if (dtoList == null || dtoList.isEmpty()) {
            return new ArrayList<>(recomendados);
        }

        for (ProdutoDTO produtoComprado : dtoList) {
            List<ProdutoDTO> produtosDaMesmaCategoria = buscarProdutosPorCategoria(produtoComprado.getCategoria(), temporada);

            if (produtosDaMesmaCategoria != null) {
                recomendados.addAll(produtosDaMesmaCategoria);
            }
        }

        return new ArrayList<>(recomendados);
    }

    private List<ProdutoDTO> buscarProdutosPorCategoria(String categoria, String temporada) {
        List<ProdutoDTO> dtoList = produtoMapper.toDto(produtoRepository.buscarRecomendacao(categoria, temporada));

        return dtoList;
    }

}
