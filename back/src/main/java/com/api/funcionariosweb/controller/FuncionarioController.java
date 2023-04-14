package com.api.funcionariosweb.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.funcionariosweb.entities.Funcionario;
import com.api.funcionariosweb.service.FuncionarioService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/funcionario")
public class FuncionarioController {

    @Autowired
    private FuncionarioService funcionarioService;

    @GetMapping("/")
    public ResponseEntity<Page<Funcionario>> buscarTodos(Pageable pagination) {
        Page<Funcionario> fun = funcionarioService.buscarTodos(pagination);
        return new ResponseEntity<>(fun, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> buscarPorId(@PathVariable(value = "id") Long id) {
        Optional<Funcionario> fun = funcionarioService.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(fun.get());
    }

    @PostMapping("/page")
    public ResponseEntity<Page<Funcionario>> buscarPorPagina(@RequestBody PaginaRequest paginaRequest) {
        int numeroPagina = paginaRequest.getNumeroPagina();
        int tamanhoPagina = paginaRequest.getTamanhoPagina();
        if (tamanhoPagina <= 0) {
            tamanhoPagina = Integer.MAX_VALUE;
        }
        Pageable pagination = PageRequest.of(numeroPagina, tamanhoPagina);
        Page<Funcionario> fun = funcionarioService.buscarTodos(pagination);
        return new ResponseEntity<>(fun, HttpStatus.OK);
    }

    @PostMapping("/")
    public Funcionario inserir(@RequestBody Funcionario funcionario) {
        return funcionarioService.inserir(funcionario);
    }

    @PutMapping("/")
    public Funcionario alterar(@RequestBody Funcionario funcionario) {
        return funcionarioService.alterar(funcionario);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable(value = "id") Long id) {
        funcionarioService.excluir(id);
        return ResponseEntity.ok().build();
    }
}
