package com.ricardo.autoMatch.controller;

import com.ricardo.autoMatch.dto.CarDTO;
import com.ricardo.autoMatch.dto.CarDetailsDTO;
import com.ricardo.autoMatch.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

    @GetMapping("/search")
    public ResponseEntity<Page<CarDTO>> search(@RequestParam Map<String, String> params) {
        return ResponseEntity.ok(carService.getFilteredCars(params));
    }

    @PostMapping("/create")
    public ResponseEntity<CarDTO> createCar(@RequestParam("image") MultipartFile file) {
        return ResponseEntity.ok(carService.createCar(file));
    }

    @PostMapping("/createWithImages")
    public ResponseEntity<CarDTO> createCarWithImages(@RequestParam("images") List<MultipartFile> files) {
        return ResponseEntity.ok(carService.createCarV2(files));
    }

    @PostMapping("/seed-data")
    public ResponseEntity<String> seedData(@RequestParam("images") List<MultipartFile> files) {
        return ResponseEntity.ok(carService.seedData(files));
    }
}
