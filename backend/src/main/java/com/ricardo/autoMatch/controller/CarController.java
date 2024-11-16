package com.ricardo.autoMatch.controller;

import com.ricardo.autoMatch.dto.CarDTO;
import com.ricardo.autoMatch.dto.CarDetailsDTO;
import com.ricardo.autoMatch.dto.CarRequestDTO;
import com.ricardo.autoMatch.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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

    @GetMapping("/recommended")
    public ResponseEntity<List<CarDTO>> getRecommendedCars(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size) {
        return ResponseEntity.ok(carService.getRecommendedCars(page, size));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CarDetailsDTO> getCarById(@PathVariable int id) {
        return ResponseEntity.ok(carService.getCar((long) id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCar(@PathVariable int id) {
        return ResponseEntity.ok(carService.deleteCar((long) id));
    }

    @GetMapping("/search")
    public ResponseEntity<Page<CarDTO>> search(@RequestParam Map<String, String> params) {
        return ResponseEntity.ok(carService.getFilteredCars(params));
    }

    @GetMapping("/listings")
    public ResponseEntity<List<CarDTO>> listings() {
        return ResponseEntity.ok(carService.getActiveListings());
    }

    @PostMapping("/newListing")
    public ResponseEntity<String> createCar(@ModelAttribute CarRequestDTO carRequestDTO) {
        return ResponseEntity.ok(carService.createCar(carRequestDTO));
    }
}
