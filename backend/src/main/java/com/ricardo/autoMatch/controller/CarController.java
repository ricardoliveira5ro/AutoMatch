package com.ricardo.autoMatch.controller;

import com.ricardo.autoMatch.dto.CarDTO;
import com.ricardo.autoMatch.model.Car;
import com.ricardo.autoMatch.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cars")
public class CarController {

    private final CarService carService;

    @Autowired
    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GetMapping("/")
    public ResponseEntity<List<CarDTO>> getAllCars(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size) {
        return ResponseEntity.ok(carService.getAllCars(page, size));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CarDTO> getCarById(@PathVariable int id) {
        return ResponseEntity.ok(carService.getCar((long) id));
    }
}
