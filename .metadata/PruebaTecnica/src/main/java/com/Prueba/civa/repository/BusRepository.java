package com.Prueba.civa.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Prueba.civa.model.Bus;
@Repository
public interface BusRepository extends JpaRepository<Bus, Integer> {
    
}