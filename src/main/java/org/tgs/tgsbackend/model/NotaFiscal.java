package org.tgs.tgsbackend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "nota-fiscal")
public class NotaFiscal {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_nota_fiscal")
    @SequenceGenerator(name = "seq_nota_fiscal", sequenceName = "seq_nota_fiscal", allocationSize = 1)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Usuario user;

    @ManyToMany
    @JoinTable(
            name = "nota_fiscal_produtos",
            joinColumns = @JoinColumn(name = "nota_fiscal_id"),
            inverseJoinColumns = @JoinColumn(name = "produto_id")
    )
    private List<Produto> produtos = new ArrayList<>();

    @Column(name = "total-compra", nullable = false)
    private Double total;
}
