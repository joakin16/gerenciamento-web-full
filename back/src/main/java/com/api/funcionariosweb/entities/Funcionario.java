package com.api.funcionariosweb.entities;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Entity
@Table(name = "TB_FUNCIONARIOS")
@Data
public class Funcionario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "nome_funcionario")
    private String nomeFuncionario;

    @Column(name = "funcao")
    private String funcao;

    @Column(name = "habilidades")
    private String habilidades;

    @Column(name = "preferencias")
    private String preferencias;

    @Column(name = "data_cadastro")
    @Temporal(TemporalType.DATE)
    private LocalDate data = LocalDate.now();
}
