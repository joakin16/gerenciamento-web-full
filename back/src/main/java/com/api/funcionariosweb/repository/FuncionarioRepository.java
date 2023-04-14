package com.api.funcionariosweb.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.funcionariosweb.entities.Funcionario;

public interface FuncionarioRepository extends JpaRepository<Funcionario, Long> {

}
