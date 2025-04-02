package com.Prueba.civa.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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
    @Column(name = "numero_bus")
    private String numeroBus;
    @Column(name = "placa")
    private String placa;

    @Column(updatable = false)
    private LocalDateTime fechaCreacion = LocalDateTime.now();

    @Column(name = "caracteristicas")
    private String caracteristicas;

    @ManyToOne
    @JoinColumn(name = "marca_id") 
    private MarcaBus marca;
    @Column(name = "activo")
    private Boolean activo;
}

