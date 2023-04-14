package com.api.funcionariosweb.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.api.funcionariosweb.entities.Funcionario;
import com.api.funcionariosweb.repository.FuncionarioRepository;

@Service
public class FuncionarioService {

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    public Page<Funcionario> buscarTodos(Pageable pagination) {
        return funcionarioRepository.findAll(pagination);
    }

    public Optional<Funcionario> findById(Long id) {
        return funcionarioRepository.findById(id);
    }

    public Funcionario inserir(Funcionario funcionario) {
        return funcionarioRepository.save(funcionario);
    }

    public Funcionario alterar(Funcionario funcionario) {
        return funcionarioRepository.saveAndFlush(funcionario);
    }

    public void excluir(Long id) {
        Funcionario funcionario = funcionarioRepository.findById(id).get();
        funcionarioRepository.delete(funcionario);
    }
}
