package org.tgs.tgsbackend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.tgs.tgsbackend.service.NotaFiscalService;
import org.tgs.tgsbackend.service.dto.NotaFiscalDTO;
import org.tgs.tgsbackend.service.dto.RecomendacaoDTO;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/nota-fiscal")
public class NotaFiscalController {

    private final NotaFiscalService service;

    @GetMapping
    public ResponseEntity<List<NotaFiscalDTO>> listar() {
        return ResponseEntity.ok().body(service.listar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<NotaFiscalDTO> buscarPorId(@PathVariable Integer id) {
        return ResponseEntity.ok().body(service.buscarPorId(id));
    }

    @PostMapping
    public ResponseEntity<RecomendacaoDTO> comprarProdutos(@RequestBody NotaFiscalDTO dto) {
        return ResponseEntity.ok().body(service.salvar(dto));
    }
}
