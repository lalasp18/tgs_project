package org.tgs.tgsbackend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.tgs.tgsbackend.service.ProdutoService;
import org.tgs.tgsbackend.service.dto.ProdutoDTO;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/produtos")
public class ProdutoController {

    private final ProdutoService service;

    @GetMapping
    public ResponseEntity<List<ProdutoDTO>> listar() {
        return ResponseEntity.ok().body(service.listar());
    }

    @GetMapping("/secao/chocolate")
    public ResponseEntity<List<ProdutoDTO>> listarChocolate() {
        return ResponseEntity.ok().body(service.listarSecaoChocolate());
    }

    @GetMapping("/secao/cafeteria")
    public ResponseEntity<List<ProdutoDTO>> listarCafeteria() {
        return ResponseEntity.ok().body(service.listarSecaoCafeteria());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProdutoDTO> buscarPorId(@PathVariable Integer id) {
        return ResponseEntity.ok().body(service.buscarPorId(id));
    }

    @PostMapping
    public ResponseEntity<ProdutoDTO> salvar(@RequestBody ProdutoDTO dto) {
        return ResponseEntity.ok().body(service.salvar(dto));
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id) {
        service.deletar(id);
    }
}
