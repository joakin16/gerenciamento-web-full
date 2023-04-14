package com.api.funcionariosweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class FuncionariosWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(FuncionariosWebApplication.class, args);
	}

}
