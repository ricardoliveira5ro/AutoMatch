package com.ricardo.autoMatch.controller;

import com.ricardo.autoMatch.dto.CarDTO;
import com.ricardo.autoMatch.dto.CarDetailsDTO;
import com.ricardo.autoMatch.model.Color;
import com.ricardo.autoMatch.model.Condition;
import com.ricardo.autoMatch.model.FuelType;
import com.ricardo.autoMatch.model.GearBox;
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
                                               @RequestParam(value = "selectedYear", required = false) String selectedYearParam,
                                               @RequestParam(value = "minYear", required = false) String minYearParam,
                                               @RequestParam(value = "maxYear", required = false) String maxYearParam,
                                               @RequestParam(value = "minMileage", required = false) String minMileageParam,
                                               @RequestParam(value = "maxMileage", required = false) String maxMileageParam,
                                               @RequestParam(value = "minPrice", required = false) String minPriceParam,
                                               @RequestParam(value = "maxPrice", required = false) String maxPriceParam,
                                               @RequestParam(value = "minHorsePower", required = false) String minHorsePowerParam,
                                               @RequestParam(value = "maxHorsePower", required = false) String maxHorsePowerParam,
                                               @RequestParam(value = "searchQuery", required = false) String searchQueryParam,
                                               @RequestParam(value = "gearBox", required = false) String gearBoxParam,
                                               @RequestParam(value = "condition", required = false) String conditionParam,
                                               @RequestParam(value = "color", required = false) String colorParam,
                                               @RequestParam(value = "doors", required = false) String doorsParam,
                                               @RequestParam(value = "minDisplacement", required = false) String minDisplacementParam,
                                               @RequestParam(value = "maxDisplacement", required = false) String maxDisplacementParam) {

        String make = (makeParam != null && !makeParam.equalsIgnoreCase("ALL")) ?
                            makeParam.toUpperCase() : null;
        String model = (modelParam != null && !modelParam.equalsIgnoreCase("ALL")) ?
                            modelParam.toUpperCase() : null;
        FuelType fuelType = (fuelTypeParam != null && !fuelTypeParam.equalsIgnoreCase("ALL")) ?
                            FuelType.valueOf(fuelTypeParam.toUpperCase()) : null;
        Integer selectedYear = (selectedYearParam != null && !selectedYearParam.isEmpty()) ?
                            Integer.parseInt(selectedYearParam) : null;
        Integer minYear = (minYearParam != null && !minYearParam.isEmpty()) ?
                            Integer.parseInt(minYearParam) : null;
        Integer maxYear = (maxYearParam != null && !maxYearParam.isEmpty()) ?
                            Integer.parseInt(maxYearParam) : null;
        Integer minMileage = (minMileageParam != null && !minMileageParam.isEmpty()) ?
                            Integer.parseInt(minMileageParam) : null;
        Integer maxMileage = (maxMileageParam != null && !maxMileageParam.isEmpty()) ?
                            Integer.parseInt(maxMileageParam) : null;
        Float minPrice = (minPriceParam != null && !minPriceParam.isEmpty()) ?
                            Float.parseFloat(minPriceParam) : null;
        Float maxPrice = (maxPriceParam != null && !maxPriceParam.isEmpty()) ?
                            Float.parseFloat(maxPriceParam) : null;
        Integer minHorsePower = (minHorsePowerParam != null && !minHorsePowerParam.isEmpty()) ?
                            Integer.parseInt(minHorsePowerParam) : null;
        Integer maxHorsePower = (maxHorsePowerParam != null && !maxHorsePowerParam.isEmpty()) ?
                            Integer.parseInt(maxHorsePowerParam) : null;
        String searchQuery = (searchQueryParam != null && !searchQueryParam.isEmpty()) ?
                            searchQueryParam.toUpperCase() : null;
        GearBox gearBox = (gearBoxParam != null && !gearBoxParam.equalsIgnoreCase("ALL")) ?
                            GearBox.valueOf(gearBoxParam.toUpperCase()) : null;
        Condition condition = (conditionParam != null && !conditionParam.equalsIgnoreCase("ALL")) ?
                            Condition.valueOf(conditionParam.toUpperCase()) : null;
        Color color = (colorParam != null && !colorParam.equalsIgnoreCase("ALL")) ?
                            Color.valueOf(colorParam.toUpperCase()) : null;
        Integer doors = (doorsParam != null && !doorsParam.isEmpty()) ?
                            Integer.parseInt(doorsParam) : null;
        Integer minDisplacement = (minDisplacementParam != null && !minDisplacementParam.isEmpty()) ?
                            Integer.parseInt(minDisplacementParam) : null;
        Integer maxDisplacement = (maxDisplacementParam != null && !maxDisplacementParam.isEmpty()) ?
                            Integer.parseInt(maxDisplacementParam) : null;

        return ResponseEntity.ok(carService.getFilteredCars(make, model, fuelType, selectedYear, minYear, maxYear, minMileage, maxMileage, minPrice, maxPrice,
                                                    minHorsePower, maxHorsePower, searchQuery, gearBox, condition, color, doors, minDisplacement, maxDisplacement));
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
