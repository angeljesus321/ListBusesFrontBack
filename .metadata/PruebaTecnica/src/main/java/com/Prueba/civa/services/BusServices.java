package com.Prueba.civa.services;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.Prueba.civa.model.Bus;



@Service
public interface BusServices {
	
     Page<Bus> findAll(Pageable pageable);
    Optional<Bus> findById(Integer id);
}

