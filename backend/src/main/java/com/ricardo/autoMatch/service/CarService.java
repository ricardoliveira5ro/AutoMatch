package com.ricardo.autoMatch.service;

import com.ricardo.autoMatch.dto.CarDTO;
import com.ricardo.autoMatch.dto.CarDetailsDTO;
import com.ricardo.autoMatch.dto.UserDTO;
import com.ricardo.autoMatch.exception.NotFoundException;
import com.ricardo.autoMatch.utils.Utils;
import com.ricardo.autoMatch.model.*;
import com.ricardo.autoMatch.repository.CarRepository;
import com.ricardo.autoMatch.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
        return convertToCarDetailsDTO(carRepository.findById(id).orElseThrow(() -> new NotFoundException("Car not found")));
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
    public Page<CarDTO> getFilteredCars(Map<String, String> params) {
        String make = (params.get("make") != null && !params.get("make").equalsIgnoreCase("ALL")) ?
                params.get("make").toUpperCase() : null;
        String model = (params.get("model") != null && !params.get("model").equalsIgnoreCase("ALL")) ?
                params.get("model").toUpperCase() : null;
        FuelType fuelType = (params.get("fuelType") != null && !params.get("fuelType").equalsIgnoreCase("ALL")) ?
                FuelType.valueOf(params.get("fuelType").toUpperCase()) : null;
        Integer selectedYear = (params.get("selectedYear") != null && !params.get("selectedYear").isEmpty()) ?
                Integer.parseInt(params.get("selectedYear")) : null;
        Integer minYear = (params.get("minYear") != null && !params.get("minYear").isEmpty()) ?
                Integer.parseInt(params.get("minYear")) : null;
        Integer maxYear = (params.get("maxYear") != null && !params.get("maxYear").isEmpty()) ?
                Integer.parseInt(params.get("maxYear")) : null;
        Integer minMileage = (params.get("minMileage") != null && !params.get("minMileage").isEmpty()) ?
                Integer.parseInt(params.get("minMileage")) : null;
        Integer maxMileage = (params.get("maxMileage") != null && !params.get("maxMileage").isEmpty()) ?
                Integer.parseInt(params.get("maxMileage")) : null;
        Float minPrice = (params.get("minPrice") != null && !params.get("minPrice").isEmpty()) ?
                Float.parseFloat(params.get("minPrice")) : null;
        Float maxPrice = (params.get("maxPrice") != null && !params.get("maxPrice").isEmpty()) ?
                Float.parseFloat(params.get("maxPrice")) : null;
        Integer minHorsePower = (params.get("minHorsePower") != null && !params.get("minHorsePower").isEmpty()) ?
                Integer.parseInt(params.get("minHorsePower")) : null;
        Integer maxHorsePower = (params.get("maxHorsePower") != null && !params.get("maxHorsePower").isEmpty()) ?
                Integer.parseInt(params.get("maxHorsePower")) : null;
        String searchQuery = (params.get("searchQuery") != null && !params.get("searchQuery").isEmpty()) ?
                params.get("searchQuery").toUpperCase() : null;
        GearBox gearBox = (params.get("gearBox") != null && !params.get("gearBox").equalsIgnoreCase("ALL")) ?
                GearBox.valueOf(params.get("gearBox").toUpperCase()) : null;
        Condition condition = (params.get("condition") != null && !params.get("condition").equalsIgnoreCase("ALL")) ?
                Condition.valueOf(params.get("condition").toUpperCase()) : null;
        Color color = (params.get("color") != null && !params.get("color").equalsIgnoreCase("ALL")) ?
                Color.valueOf(params.get("color").toUpperCase()) : null;
        Integer doors = (params.get("doors") != null && !params.get("doors").isEmpty()) ?
                Integer.parseInt(params.get("doors")) : null;
        Integer minDisplacement = (params.get("minDisplacement") != null && !params.get("minDisplacement").isEmpty()) ?
                Integer.parseInt(params.get("minDisplacement")) : null;
        Integer maxDisplacement = (params.get("maxDisplacement") != null && !params.get("maxDisplacement").isEmpty()) ?
                Integer.parseInt(params.get("maxDisplacement")) : null;
        List<Style> styles = (params.get("styles") != null && !params.get("styles").isEmpty()) ?
                Arrays.stream(params.get("styles").split("-")).map(style -> Style.valueOf(style.toUpperCase())).toList() : null;

        int page = Integer.parseInt(params.get("page"));
        int size = Integer.parseInt(params.get("size"));

        return carRepository.findFiltered(make, model, fuelType, selectedYear, minYear, maxYear, minMileage, maxMileage,
                                        minPrice, maxPrice, minHorsePower, maxHorsePower, searchQuery, gearBox, condition,
                                        color, doors, minDisplacement, maxDisplacement, styles, PageRequest.of(page, size))
                            .map(this::convertToCarDTO);
    }

    @Transactional(readOnly = true)
    public List<CarDTO> getActiveListings() {
        return carRepository.findByUser(Utils.getCurrentUser())
                                .stream().map(this::convertToCarDTO).toList();
    }

    public CarDTO createCar(MultipartFile file) {
        Car car = new Car("TEST", "TEST", "TEST", "TEST", Condition.NEW, 1f, Style.COUPE, Date.from(Instant.now()), 1, FuelType.DIESEL, GearBox.AUTOMATIC, Color.BLACK, 1, 1, 1, true);
        car.setUser(userRepository.findById(1).orElseThrow(() -> new NotFoundException("User not found")));

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
        car.setUser(userRepository.findById(1).orElseThrow(() -> new NotFoundException("User not found")));

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
        car.setUser(userRepository.findById(1).orElseThrow(() -> new NotFoundException("User not found")));

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
                car.getGearBox().getValue(),
                car.getDisplacement(),
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
