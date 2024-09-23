package org.tgs.tgsbackend.service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.tgs.tgsbackend.model.Usuario;
import org.tgs.tgsbackend.repository.UsuarioRepository;
import org.tgs.tgsbackend.service.dto.UsuarioDTO;
import org.tgs.tgsbackend.service.mapper.UsuarioMapper;
import org.tgs.tgsbackend.util.MensagemUsuarioUtil;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Transactional
public class UsuarioService {

    private final UsuarioRepository repository;
    private final UsuarioMapper mapper;

    public List<Usuario> listarEntidades() {
        return repository.findAll();
    }

    public List<UsuarioDTO> listar() {
        return mapper.toDto(listarEntidades());
    }

    public Usuario buscarPorNomeEntidade(String nome) {
        return repository.findByNome(nome)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, MensagemUsuarioUtil.NAO_ENCONTRADO));
    }

    public UsuarioDTO buscarPorNome(String nome) {
        return mapper.toDto(buscarPorNomeEntidade(nome));
    }

    public UsuarioDTO salvar(UsuarioDTO dto) {
        if(Objects.nonNull(dto.getNome())) {
            Usuario entity = repository.save(mapper.toEntity(dto));
            return mapper.toDto(entity);
        } else {
            return mapper.toDto(repository.save(mapper.toEntity(dto)));
        }
    }

    public UsuarioDTO verificarUser(String nome) {
        return buscarPorNome(nome);
    }

}
