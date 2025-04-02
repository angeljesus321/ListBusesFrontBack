package com.Prueba.civa.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.Prueba.civa.model.Bus;
import com.Prueba.civa.repository.BusRepository;
import com.Prueba.civa.services.BusServices;
import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@AllArgsConstructor
@RestController
@RequestMapping("/api/buses")
public class BusController {
	 @Autowired
	    private BusServices busService;
	
	private final BusServices busServices;
	 @GetMapping
	    @ResponseStatus(HttpStatus.OK)
	    public Page<Bus> findAll(Pageable pageable){
	        return busServices.findAll(pageable);
	    }

    // GET /bus/{id} - Obtiene un bus por ID
	 @GetMapping("/{id}")
	    public ResponseEntity<Bus> findById(@PathVariable Integer id){
	        return ResponseEntity.of(busServices.findById(id));
	    }
}
