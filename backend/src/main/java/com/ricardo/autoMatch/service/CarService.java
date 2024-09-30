package com.ricardo.autoMatch.service;

import com.ricardo.autoMatch.dto.CarDTO;
import com.ricardo.autoMatch.model.Car;
import com.ricardo.autoMatch.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {

    private final CarRepository carRepository;

    @Autowired
    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<CarDTO> getAllCars(int page, int size) {
        return carRepository.findAll(PageRequest.of(page, size)).stream().map(this::convertToCarDTO).toList();
    }

    public CarDTO getCar(Long id) {
        return convertToCarDTO(carRepository.findById(id).orElseThrow(() -> new RuntimeException("Car not found")));
    }

    private CarDTO convertToCarDTO(Car car) {
        return new CarDTO(
                car.getId(),
                car.getMake(),
                car.getModel(),
                car.getCondition().name(),
                car.getPrice(),
                car.getStyle().name(),
                car.getDate(),
                car.getMileage(),
                car.getFuelType().name(),
                car.getGearBox().name(),
                car.getColor().name(),
                car.getDoors(),
                car.getDisplacement(),
                car.getHorsePower(),
                car.getUser().getId()
        );
    }
}
