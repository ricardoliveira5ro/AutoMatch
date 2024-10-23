package com.ricardo.autoMatch.service;

import com.ricardo.autoMatch.dto.CarDTO;
import com.ricardo.autoMatch.dto.CarDetailsDTO;
import com.ricardo.autoMatch.dto.CarImageDTO;
import com.ricardo.autoMatch.dto.UserDTO;
import com.ricardo.autoMatch.model.*;
import com.ricardo.autoMatch.repository.CarRepository;
import com.ricardo.autoMatch.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.Instant;
import java.util.Base64;
import java.util.Date;
import java.util.List;

@Service
public class CarService {

    private final CarRepository carRepository;
    private final UserRepository userRepository;

    @Autowired
    public CarService(CarRepository carRepository, UserRepository userRepository) {
        this.carRepository = carRepository;
        this.userRepository = userRepository;
    }

    public List<CarDTO> getAllCars(int page, int size) {
        return carRepository.findAll(PageRequest.of(page, size)).stream().map(this::convertToCarDTO).toList();
    }

    @Transactional(readOnly = true)
    public CarDetailsDTO getCar(Long id) {
        return convertToCarDetailsDTO(carRepository.findById(id).orElseThrow(() -> new RuntimeException("Car not found")));
    }

    public CarDTO createCar(MultipartFile file) {
        Car car = new Car("TEST", "TEST", "TEST", "TEST", Condition.NEW, 1f, Style.COUPE, Date.from(Instant.now()), 1, FuelType.DIESEL, GearBox.AUTOMATIC, Color.BLACK, 1, 1, 1);
        car.setUser(userRepository.findById(1).orElseThrow(() -> new RuntimeException("User not found")));

        try {
            String base64Image = Base64.getEncoder().encodeToString(file.getBytes());
            car.setImgCover(base64Image);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return convertToCarDTO(carRepository.save(car));
    }

    public CarDTO createCarV2(List<MultipartFile> files) {
        Car car = new Car("TEST", "TEST", "TEST", "TEST", Condition.NEW, 1f, Style.COUPE, Date.from(Instant.now()), 1, FuelType.DIESEL, GearBox.AUTOMATIC, Color.BLACK, 1, 1, 1);
        car.setUser(userRepository.findById(1).orElseThrow(() -> new RuntimeException("User not found")));

        for (MultipartFile file : files) {
            try {
                String base64Image = Base64.getEncoder().encodeToString(file.getBytes());

                CarImage carImage = new CarImage(base64Image, files.indexOf(file));
                carImage.setCar(car);

                car.getCarImages().add(carImage);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }

        return convertToCarDTO(carRepository.save(car));
    }

    private CarDTO convertToCarDTO(Car car) {
        return new CarDTO(
                car.getId(),
                car.getTitle(),
                car.getPrice(),
                car.getDate(),
                car.getMileage(),
                car.getFuelType().getValue(),
                car.getHorsePower(),
                car.getImgCover()
        );
    }

    private CarDetailsDTO convertToCarDetailsDTO(Car car) {
        return new CarDetailsDTO(
                car.getId(),
                car.getTitle(),
                car.getDescription(),
                car.getMake(),
                car.getModel(),
                car.getCondition().getValue(),
                car.getPrice(),
                car.getStyle().getValue(),
                car.getDate(),
                car.getMileage(),
                car.getFuelType().getValue(),
                car.getGearBox().getValue(),
                car.getColor().getValue(),
                car.getDoors(),
                car.getDisplacement(),
                car.getHorsePower(),
                car.getCarImages().stream().map(this::convertToCarImageDTO).toList(),
                UserDTO.builder()
                    .id(car.getUser().getId())
                    .firstName(car.getUser().getFirstName())
                    .lastName(car.getUser().getLastName())
                    .contactEmail(car.getUser().getContactEmail())
                    .contactPhone(car.getUser().getContactPhone())
                    .location(car.getUser().getLocation())
                    .build()
        );
    }

    private CarImageDTO convertToCarImageDTO(CarImage carImage) {
        return new CarImageDTO(
                carImage.getId(),
                carImage.getImageData(),
                carImage.getOrder()
        );
    }
}
