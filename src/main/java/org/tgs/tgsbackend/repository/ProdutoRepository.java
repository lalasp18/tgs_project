package org.tgs.tgsbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.tgs.tgsbackend.model.Produto;

import java.util.List;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Integer> {

    List<Produto> findAllByCategoriaAndTemporada(String categoria, String temporada);

    @Query("SELECT p FROM Produto p WHERE p.secaoAba = :secao")
    List<Produto> buscarPorSecao(@Param("secao") String secao);
}