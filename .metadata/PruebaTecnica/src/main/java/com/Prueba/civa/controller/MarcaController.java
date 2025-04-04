package com.Prueba.civa.controller;	

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.Prueba.civa.model.Bus;
import com.Prueba.civa.repository.BusRepository;
import com.Prueba.civa.repository.MarcaRepository;
import com.Prueba.civa.services.BusServices;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/marcas")
public class MarcaController {
	@Autowired
    private MarcaRepository marcaRepository;
}
