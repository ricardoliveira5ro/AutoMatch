package com.ricardo.autoMatch.service;

import com.ricardo.autoMatch.model.Car;
import com.ricardo.autoMatch.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class CarService {

    private final CarRepository carRepository;

    @Autowired
    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public Page<Car> getAllCars(int page, int size) {
        return carRepository.findAll(PageRequest.of(page, size));
    }

    public Car getCar(Long id) {
        return carRepository.findById(id).orElseThrow(() -> new RuntimeException("Car not found"));
    }
}
