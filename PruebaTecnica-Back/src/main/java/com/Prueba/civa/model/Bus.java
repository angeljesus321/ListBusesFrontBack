package com.Prueba.civa.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;


import jakarta.persistence.*;
import com.Prueba.civa.model.MarcaBus;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "buses")
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String numeroBus;
    private String placa;

    @Column(updatable = false)
    private LocalDateTime fechaCreacion = LocalDateTime.now();

    private String caracteristicas;

    @Enumerated(EnumType.STRING)
    @Column(name = "marca")
    private MarcaBus marca;

    private Boolean activo;
}

