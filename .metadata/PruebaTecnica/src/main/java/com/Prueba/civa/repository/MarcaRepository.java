package com.Prueba.civa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Prueba.civa.model.MarcaBus;
@Repository
public interface MarcaRepository extends JpaRepository<MarcaBus, Integer>{

}
