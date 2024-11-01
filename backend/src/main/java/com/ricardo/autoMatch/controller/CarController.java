package com.ricardo.autoMatch.controller;

import com.ricardo.autoMatch.dto.CarDTO;
import com.ricardo.autoMatch.dto.CarDetailsDTO;
import com.ricardo.autoMatch.model.FuelType;
import com.ricardo.autoMatch.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

    @GetMapping("/recommended")
    public ResponseEntity<List<CarDTO>> getRecommendedCars(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "20") int size) {
        return ResponseEntity.ok(carService.getRecommendedCars(page, size));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CarDetailsDTO> getCarById(@PathVariable int id) {
        return ResponseEntity.ok(carService.getCar((long) id));
    }

    @GetMapping("/search")
    public ResponseEntity<List<CarDTO>> search(@RequestParam(value = "make", required = false) String makeParam,
                                               @RequestParam(value = "model", required = false) String modelParam,
                                               @RequestParam(value = "fuelType", required = false) String fuelTypeParam,
                                               @RequestParam(value = "year", required = false) String yearParam,
                                               @RequestParam(value = "mileage", required = false) String mileageParam,
                                               @RequestParam(value = "maxPrice", required = false) String maxPriceParam,
                                               @RequestParam(value = "housePower", required = false) String horsePowerParam,
                                               @RequestParam(value = "searchQuery", required = false) String searchQueryParam) {

        String make = (makeParam != null) ? makeParam.toUpperCase() : null;
        String model = (modelParam != null) ? modelParam.toUpperCase() : null;
        FuelType fuelType = (fuelTypeParam != null) ? FuelType.valueOf(fuelTypeParam.toUpperCase()) : null;
        Integer mileage = (mileageParam != null) ? Integer.parseInt(mileageParam) : null;
        Float maxPrice = (maxPriceParam != null) ? Float.parseFloat(maxPriceParam) : null;
        Integer horsePower = (horsePowerParam != null) ? Integer.parseInt(horsePowerParam) : null;
        String searchQuery = (searchQueryParam != null) ? searchQueryParam.toUpperCase() : null;

        return ResponseEntity.ok(carService.getFilteredCars(make, model, fuelType, yearParam, mileage, maxPrice, horsePower, searchQuery));
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
