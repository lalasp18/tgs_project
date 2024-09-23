package org.tgs.tgsbackend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.tgs.tgsbackend.service.UsuarioService;
import org.tgs.tgsbackend.service.dto.UsuarioDTO;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UsuarioController {

    private final UsuarioService service;

    @GetMapping
    public ResponseEntity<List<UsuarioDTO>> listar() {
        return ResponseEntity.ok().body(service.listar());
    }

    @GetMapping("/{nome}")
    public ResponseEntity<UsuarioDTO> buscarPorNome(@PathVariable String nome) {
        return ResponseEntity.ok().body(service.buscarPorNome(nome));
    }

    @PostMapping
    public ResponseEntity<UsuarioDTO> salvar(@RequestBody UsuarioDTO dto) {
        return ResponseEntity.ok().body(service.salvar(dto));
    }

    @GetMapping("/login/{nome}")
    public ResponseEntity<UsuarioDTO> login(@PathVariable String nome) {
        return ResponseEntity.ok().body(service.verificarUser(nome));
    }


}
