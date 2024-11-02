package com.ricardo.autoMatch.service;

import com.ricardo.autoMatch.dto.CarDTO;
import com.ricardo.autoMatch.dto.CarDetailsDTO;
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
import java.util.*;

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

    @Transactional(readOnly = true)
    public List<CarDTO> getRecommendedCars(int page, int size) {
        List<Car> recommended = carRepository.findByRecommendedTrue();

        Collections.shuffle(recommended);

        int start = page * size;
        int end = Math.min(start + size, recommended.size());

        return recommended.subList(start, end).stream().map(this::convertToCarDTO).toList();
    }

    @Transactional(readOnly = true)
    public List<CarDTO> getFilteredCars(String make, String model, FuelType fuelType, Integer year, Integer maxMileage, Float maxPrice, Integer minHorsePower, String searchQuery) {
        return carRepository.findFiltered(make, model, fuelType, year, maxMileage, maxPrice, minHorsePower, searchQuery)
                .stream().map(this::convertToCarDTO).toList();
    }

    public CarDTO createCar(MultipartFile file) {
        Car car = new Car("TEST", "TEST", "TEST", "TEST", Condition.NEW, 1f, Style.COUPE, Date.from(Instant.now()), 1, FuelType.DIESEL, GearBox.AUTOMATIC, Color.BLACK, 1, 1, 1, true);
        car.setUser(userRepository.findById(1).orElseThrow(() -> new RuntimeException("User not found")));

        try {
            //String base64Image = Base64.getEncoder().encodeToString(file.getBytes());
            car.setImgCover(file.getBytes());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return convertToCarDTO(carRepository.save(car));
    }

    public CarDTO createCarV2(List<MultipartFile> files) {
        Car car = new Car("TEST", "TEST", "TEST", "TEST", Condition.NEW, 1f, Style.COUPE, Date.from(Instant.now()), 1, FuelType.DIESEL, GearBox.AUTOMATIC, Color.BLACK, 1, 1, 1, true);
        car.setUser(userRepository.findById(1).orElseThrow(() -> new RuntimeException("User not found")));

        for (MultipartFile file : files) {
            try {
                //String base64Image = Base64.getEncoder().encodeToString(file.getBytes());

                CarImage carImage = new CarImage(file.getBytes(), files.indexOf(file));
                carImage.setCar(car);

                car.getCarImages().add(carImage);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }

        return convertToCarDTO(carRepository.save(car));
    }

    public String seedData(List<MultipartFile> files) {
        Car car = new Car("Ford Mustang 5.0 Ti-VCT GT", "", "Ford", "Mustang", Condition.USED, 78900f, Style.COUPE, Date.from(Instant.now()), 81000, FuelType.GASOLINE, GearBox.MANUAL, Color.GREEN, 2, 4951, 450, true);
        car.setUser(userRepository.findById(1).orElseThrow(() -> new RuntimeException("User not found")));

        try {
            car.setImgCover(files.getFirst().getBytes());

            for (MultipartFile file : files) {
                //String base64Image = Base64.getEncoder().encodeToString(file.getBytes());

                CarImage carImage = new CarImage(file.getBytes(), files.indexOf(file));
                carImage.setCar(car);

                car.getCarImages().add(carImage);
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        carRepository.save(car);

        return "Seeded successfully";
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
                //Base64.getEncoder().encodeToString(car.getImgCover()),
                car.isRecommended()
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
                car.getCarImages().stream()
                        .sorted(Comparator.comparing(CarImage::getOrder))
                        .map(carImage -> Base64.getEncoder().encodeToString(carImage.getImageData())).toList(),
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
}
