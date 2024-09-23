package org.tgs.tgsbackend.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.tgs.tgsbackend.util.MensagemRecomendacaoUtil;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Setter
@Getter
@NoArgsConstructor
public class RecomendacaoDTO {

    private NotaFiscalDTO compras;
    private String mensagemMarketing;
    private String temporada;
    private List<ProdutoDTO> produtosRecomendados = new ArrayList<>();

    public RecomendacaoDTO(NotaFiscalDTO compras) {
        this.compras = compras;
        this.mensagemMarketing = gerarMensagemDeMarketing();
        this.temporada = gerarTemporada();
    }

    private String gerarMensagemDeMarketing() {
        LocalDate currentDate = LocalDate.now();
        Month currentMonth = currentDate.getMonth();

        Map<Month, String> messages = new HashMap<>();
        messages.put(Month.DECEMBER, MensagemRecomendacaoUtil.MES_DEZEMBRO);
        messages.put(Month.NOVEMBER, MensagemRecomendacaoUtil.MES_NOVEMBRO);
        messages.put(Month.OCTOBER, MensagemRecomendacaoUtil.MES_OUTUBRO);
        messages.put(Month.SEPTEMBER, MensagemRecomendacaoUtil.MES_SETEMBRO);
        messages.put(Month.JUNE, MensagemRecomendacaoUtil.MES_JUNHO);
        messages.put(Month.APRIL, MensagemRecomendacaoUtil.MES_ABRIL);
        messages.put(Month.FEBRUARY, MensagemRecomendacaoUtil.MES_FEVEREIRO);
        messages.put(Month.JANUARY, MensagemRecomendacaoUtil.MES_FEVEREIRO);

        StringBuilder message = new StringBuilder(MensagemRecomendacaoUtil.AGRADECIMENTO);

        String seasonalMessage = messages.getOrDefault(currentMonth, MensagemRecomendacaoUtil.PADRAO);
        message.append(seasonalMessage);
        message.append(MensagemRecomendacaoUtil.PADRAO_RECOMENDA);

        return message.toString();
    }

    public String gerarTemporada() {
        LocalDate currentDate = LocalDate.now();
        Month currentMonth = currentDate.getMonth();

        Map<Month, String> temporadaMap = new HashMap<>();
        temporadaMap.put(Month.DECEMBER, "Natal");
        temporadaMap.put(Month.NOVEMBER, "Natal");
        temporadaMap.put(Month.OCTOBER, "Dia das Crianças");
        temporadaMap.put(Month.SEPTEMBER, "Dia das Crianças");
        temporadaMap.put(Month.JUNE, "Festa Junina");
        temporadaMap.put(Month.APRIL, "Páscoa");
        temporadaMap.put(Month.FEBRUARY, "Dia dos Namorados");
        temporadaMap.put(Month.JANUARY, "Ano Novo");

        return temporadaMap.getOrDefault(currentMonth, "Fora de Temporada");
    }
}
