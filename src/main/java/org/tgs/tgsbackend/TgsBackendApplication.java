package org.tgs.tgsbackend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.tgs.tgsbackend.model.Produto;
import org.tgs.tgsbackend.model.Usuario;
import org.tgs.tgsbackend.repository.ProdutoRepository;
import org.tgs.tgsbackend.repository.UsuarioRepository;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
@RestController
public class TgsBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(TgsBackendApplication.class, args);
	}

	@GetMapping
	public String introducao() {
		return "Projeto TGS";
	}

	@Bean
	CommandLineRunner initDatabase( UsuarioRepository userRepository, ProdutoRepository produtoRepository ) {
		return args -> {

			 userRepository.deleteAll();
			 Usuario user1 = new Usuario();
			 user1.setNome("lays.pio");
			 userRepository.save(user1);

			 Usuario user2 = new Usuario();
			 user2.setNome("heloara.user");
			 userRepository.save(user2);

			 Usuario user3 = new Usuario();
			 user3.setNome("heloísa.user");
			 userRepository.save(user3);

			 gerarProdutosPorTemporadaAba1(produtoRepository);
			 gerarProdutosPorTemporadaAba2(produtoRepository);
		};
	}

	private void gerarProdutosPorTemporadaAba1(ProdutoRepository produtoRepository) {

		produtoRepository.deleteAll();
//		NATAL
		Produto prod1 = new Produto();
		prod1.setNome("TRUFAS LACREME 160G");
		prod1.setCategoria("Trufas");
		prod1.setTemporada("Natal");
		prod1.setValor(32.99);
		prod1.setPromocao(34.99);
		prod1.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw02fea98b/medium/1000624_1.png");
		prod1.setSecaoAba("Chocolate");

		Produto prod2 = new Produto();
		prod2.setNome("Tablete LaNut Pistache 130g");
		prod2.setCategoria("Tabletes");
		prod2.setTemporada("Natal");
		prod2.setValor(29.99);
		prod2.setPromocao(32.99);
		prod2.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwd9a50891/medium/1003193_1.png");
		prod2.setSecaoAba("Chocolate");

		Produto prod7 = new Produto();
		prod7.setNome("TABLETE DREAMS CREME BRULEE 130G");
		prod7.setCategoria("Tabletes");
		prod7.setTemporada("Natal");
		prod7.setValor(22.99);
		prod7.setPromocao(24.99);
		prod7.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw55ad291d/medium/1003339_1.png");
		prod7.setSecaoAba("Chocolate");

		Produto prod8 = new Produto();
		prod8.setNome("TABLETE DREAMS MIL FOLHAS 130G");
		prod8.setCategoria("Tabletes");
		prod8.setTemporada("Natal");
		prod8.setValor(22.99);
		prod8.setPromocao(24.99);
		prod8.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwa01979e9/medium/1002880_2%20(1)%20fef.png");
		prod8.setSecaoAba("Chocolate");

		Produto prod5 = new Produto();
		prod5.setNome("DRAGEADO CLÁSSICOS DRINK LICOR 150G");
		prod5.setCategoria("Drageados");
		prod5.setTemporada("Natal");
		prod5.setValor(27.99);
		prod5.setPromocao(29.99);
		prod5.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw96edba94/medium/1002441_1.png");
		prod5.setSecaoAba("Chocolate");

//		DIA DAS CRIANÇAS
		Produto prod14 = new Produto();
		prod14.setNome("CAIXA NUVEM URSINHOS CARINHOSOS 47G");
		prod14.setCategoria("Presentes Especiais");
		prod14.setTemporada("Dia das crianças");
		prod14.setValor(19.99);
		prod14.setPromocao(21.99);
		prod14.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw1bf140b6/medium/1003367_1.png");
		prod14.setSecaoAba("Chocolate");

//		FORA DE TEMPORADA
		Produto prod6 = new Produto();
		prod6.setNome("DRAGEADO LANUT AVELÃ 150G");
		prod6.setCategoria("Drageados");
		prod6.setTemporada("Fora de Temporada");
		prod6.setValor(27.99);
		prod6.setPromocao(29.99);
		prod6.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwbafdda91/medium/1000003_1.png");
		prod6.setSecaoAba("Chocolate");

		Produto prod3 = new Produto();
		prod3.setNome("DRAGEADO AMÊNDOA 150G");
		prod3.setCategoria("Drageados");
		prod3.setTemporada("Fora de Temporada");
		prod3.setValor(27.99);
		prod3.setPromocao(29.99);
		prod3.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw1fedce9a/medium/1001697_1.png");
		prod3.setSecaoAba("Chocolate");

		Produto prod4 = new Produto();
		prod4.setNome("DRAGEADO BYTES CROCANTE AO LEITE ZERO ADIÇÃO DE AÇÚCAR 150G");
		prod4.setCategoria("Drageados");
		prod4.setTemporada("Fora de Temporada");
		prod4.setValor(27.99);
		prod4.setPromocao(29.99);
		prod4.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw61d866eb/medium/1003120_1.png");
		prod4.setSecaoAba("Chocolate");

		Produto prod9 = new Produto();
		prod9.setNome("TABLETE DREAMS TORTA DE MARACUJÁ 130G");
		prod9.setCategoria("Tabletes");
		prod9.setTemporada("Fora de Temporada");
		prod9.setValor(22.99);
		prod9.setPromocao(24.99);
		prod9.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw044a507f/medium/1002882_1.png");
		prod9.setSecaoAba("Chocolate");

		Produto prod10 = new Produto();
		prod10.setNome("TABLETE DREAMS TORTA DE MORANGO 130G");
		prod10.setCategoria("Tabletes");
		prod10.setTemporada("Fora de Temporada");
		prod10.setValor(22.99);
		prod10.setPromocao(24.99);
		prod10.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw61478716/medium/1002883_1.png");
		prod10.setSecaoAba("Chocolate");

		Produto prod11 = new Produto();
		prod11.setNome("TABLETE DREAMS MIL FOLHAS AVELÃ 130G");
		prod11.setCategoria("Tabletes");
		prod11.setTemporada("Fora de Temporada");
		prod11.setValor(22.99);
		prod11.setPromocao(24.99);
		prod11.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw4f0f3da7/medium/1002881_1.png");
		prod11.setSecaoAba("Chocolate");

		Produto prod12 = new Produto();
		prod12.setNome("TABLETE BENDITO CACAO 70% CACAU 100G");
		prod12.setCategoria("Tabletes");
		prod12.setTemporada("Fora de Temporada");
		prod12.setValor(19.99);
		prod12.setPromocao(21.99);
		prod12.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw5f9f39c9/medium/1002795_1.png");
		prod12.setSecaoAba("Chocolate");

		Produto prod13 = new Produto();
		prod13.setNome("TABLETE LACREME BRANCO ZERO ADIÇÃO DE AÇÚCAR 100G");
		prod13.setCategoria("Tabletes");
		prod13.setTemporada("Fora de Temporada");
		prod13.setValor(19.99);
		prod13.setPromocao(21.99);
		prod13.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwe2ce4be4/medium/1003054_1.png");
		prod13.setSecaoAba("Chocolate");

		produtoRepository.save(prod1);
		produtoRepository.save(prod2);
		produtoRepository.save(prod3);
		produtoRepository.save(prod4);
		produtoRepository.save(prod5);
		produtoRepository.save(prod6);
		produtoRepository.save(prod7);
		produtoRepository.save(prod8);
		produtoRepository.save(prod9);
		produtoRepository.save(prod10);
		produtoRepository.save(prod11);
		produtoRepository.save(prod12);
		produtoRepository.save(prod13);
		produtoRepository.save(prod14);

		List<Produto> produtos = Arrays.asList(
				prod1, prod2, prod3, prod4, prod5,
				prod6, prod7, prod8, prod9, prod10,
				prod11, prod12, prod13, prod14
		);

		produtoRepository.saveAll(produtos);
	}

	private void gerarProdutosPorTemporadaAba2(ProdutoRepository produtoRepository) {
//		NATAL
		Produto prod1 = new Produto();
		prod1.setNome("TORTA HOLANDESA 1,5KG");
		prod1.setCategoria("Tortas");
		prod1.setTemporada("Natal");
		prod1.setValor(159.99);
		prod1.setPromocao(169.99);
		prod1.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw16bf52f8/medium/1001346_1.png");
		prod1.setSecaoAba("Cafeteria");

		Produto prod3 = new Produto();
		prod3.setNome("FONDUE LACREME 250G");
		prod3.setCategoria("Fondue");
		prod3.setTemporada("Natal");
		prod3.setValor(39.99);
		prod3.setPromocao(49.99);
		prod3.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwb956104c/medium/1001673_1.png");
		prod3.setSecaoAba("Cafeteria");

//		DIA DAS CRIANÇAS
		Produto prod10 = new Produto();
		prod10.setNome("SORVETE LACREME KIDS 40G");
		prod10.setCategoria("Sorvetes");
		prod10.setTemporada("Dia das crianças");
		prod10.setValor(10.99);
		prod10.setPromocao(9.99);
		prod10.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwb775067d/medium/1002198_1.png");
		prod10.setSecaoAba("Cafeteria");

//		FORA DE TEMPORADA
		Produto prod2 = new Produto();
		prod2.setNome("TORTA CHOCOLATE 1,5KG");
		prod2.setCategoria("Tortas");
		prod2.setTemporada("Fora de Temporada");
		prod2.setValor(159.99);
		prod2.setPromocao(169.99);
		prod2.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw7d5fe0e4/medium/1001350_1.png");
		prod2.setSecaoAba("Cafeteria");

		Produto prod4 = new Produto();
		prod4.setNome("SORVETE LANUT PISTACHE 70G");
		prod4.setCategoria("Sorvetes");
		prod4.setTemporada("Fora de Temporada");
		prod4.setValor(19.99);
		prod4.setPromocao(20.99);
		prod4.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw16eec2e0/medium/1003212_1.png");
		prod4.setSecaoAba("Cafeteria");

		Produto prod5 = new Produto();
		prod5.setNome("MOUSSE BENDITO CACAO 110G");
		prod5.setCategoria("Mousses");
		prod5.setTemporada("Fora de Temporada");
		prod5.setValor(17.99);
		prod5.setPromocao(18.99);
		prod5.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw99c50bbd/medium/1002934_1.png");
		prod5.setSecaoAba("Cafeteria");

		Produto prod6 = new Produto();
		prod6.setNome("MOUSSE LANUT 110G");
		prod6.setCategoria("Mousses");
		prod6.setTemporada("Fora de Temporada");
		prod6.setValor(17.99);
		prod6.setPromocao(18.99);
		prod6.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw6939b687/medium/1002935_1.png");
		prod6.setSecaoAba("Cafeteria");

		Produto prod7 = new Produto();
		prod7.setNome("MOUSSE LACREME 110G");
		prod7.setCategoria("Mousses");
		prod7.setTemporada("Fora de Temporada");
		prod7.setValor(17.99);
		prod7.setPromocao(18.99);
		prod7.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwd5c918b9/medium/1001610_1.png");
		prod7.setSecaoAba("Cafeteria");

		Produto prod8 = new Produto();
		prod8.setNome("SORVETE LACREME MEZZO 70G");
		prod8.setCategoria("Sorvetes");
		prod8.setTemporada("Fora de Temporada");
		prod8.setValor(14.99);
		prod8.setPromocao(15.99);
		prod8.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dwf1e04a1f/medium/1002460_1.png");
		prod8.setSecaoAba("Cafeteria");

		Produto prod9 = new Produto();
		prod9.setNome("WAFFLE BAUNILHA 70G");
		prod9.setCategoria("Waffles");
		prod9.setTemporada("Fora de Temporada");
		prod9.setValor(11.99);
		prod9.setPromocao(12.99);
		prod9.setFoto("https://www.cacaushow.com.br/on/demandware.static/-/Sites-masterCatalog_CacauShow/default/dw1e1a23a6/medium/1001201_1.png");
		prod9.setSecaoAba("Cafeteria");

		List<Produto> produtos = Arrays.asList(
				prod1, prod2, prod3, prod4, prod5,
				prod6, prod7, prod8, prod9, prod10
		);

		produtoRepository.saveAll(produtos);
	}
}
