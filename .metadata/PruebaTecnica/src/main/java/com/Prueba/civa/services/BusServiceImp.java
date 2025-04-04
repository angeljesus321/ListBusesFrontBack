package com.Prueba.civa.services;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.Prueba.civa.model.Bus;
import com.Prueba.civa.repository.BusRepository;
import org.springframework.data.domain.Pageable;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class BusServiceImp implements BusServices {
	private final BusRepository busRepository;
    @Override
    public Page<Bus> findAll(Pageable pageable) {
        return busRepository.findAll(pageable);
    }

    @Override
    public Optional<Bus> findById(Integer id) {
        return busRepository.findById(id);
    }
}
