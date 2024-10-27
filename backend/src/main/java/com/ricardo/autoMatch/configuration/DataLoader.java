package com.ricardo.autoMatch.configuration;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ricardo.autoMatch.model.*;
import com.ricardo.autoMatch.repository.CarRepository;
import com.ricardo.autoMatch.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.util.StreamUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.security.SecureRandom;
import java.text.SimpleDateFormat;
import java.util.*;

@Component
public class DataLoader implements CommandLineRunner {

    private final UserRepository userRepository;
    private final CarRepository carRepository;
    private final ObjectMapper objectMapper;
    private final PasswordEncoder passwordEncoder;

    public DataLoader(UserRepository userRepository, CarRepository carRepository, ObjectMapper objectMapper, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.carRepository = carRepository;
        this.objectMapper = objectMapper;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.findAll().isEmpty()) {
            userSeedData();
        }

        if (carRepository.findAll().isEmpty()) {
            carSeedData();
        }
    }

    private void userSeedData() {
        try {
            InputStream inputStream = new ClassPathResource("static/seed/users.json").getInputStream();

            List<User> users = objectMapper.readValue(inputStream, new TypeReference<>() {});
            users.forEach(user -> user.setPassword(passwordEncoder.encode(alphaNumericString())));

            userRepository.saveAll(users);

            System.out.println("User seed data loaded successfully.");

        } catch (Exception e) {
            System.err.println("Failed to load user seed data: " + e.getMessage());
        }
    }

    private void carSeedData() {
        try {
            InputStream inputStream = new ClassPathResource("static/seed/cars.json").getInputStream();
            List<Map<String, Object>> carsData = objectMapper.readValue(inputStream, new TypeReference<>() {});

            for (Map<String, Object> carData : carsData) {
                Car car = new Car(
                    (String) carData.get("title"),
                    (String) carData.get("description"),
                    (String) carData.get("make"),
                    (String) carData.get("model"),
                    Condition.valueOf((String) carData.get("condition")),
                    Float.parseFloat(String.valueOf(carData.get("price"))),
                    Style.valueOf((String) carData.get("style")),
                    new SimpleDateFormat("yyyy-M-dd").parse((String) carData.get("date")),
                    Integer.parseInt(String.valueOf(carData.get("mileage"))),
                    FuelType.valueOf((String) carData.get("fuelType")),
                    GearBox.valueOf((String) carData.get("gearBox")),
                    Color.valueOf((String) carData.get("color")),
                    Integer.parseInt(String.valueOf(carData.get("doors"))),
                    Integer.parseInt(String.valueOf(carData.get("displacement"))),
                    Integer.parseInt(String.valueOf(carData.get("horsePower")))
                );

                User user = userRepository.findById(Integer.parseInt(String.valueOf(carData.get("userId")))).orElseThrow();
                car.setUser(user);

                List<String> imagesPaths = objectMapper.convertValue(carData.get("imagesPaths"), new TypeReference<>() {});

                int[] index = {1};
                imagesPaths.forEach(path -> {
                    try {
                        byte[] imageData = StreamUtils.copyToByteArray(new ClassPathResource(path).getInputStream());

                        if (index[0] == 1) {
                            car.setImgCover(imageData);
                        }

                        CarImage carImage = new CarImage(imageData, index[0]++);
                        carImage.setCar(car);

                        car.getCarImages().add(carImage);
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                });

                carRepository.save(car);
            }

        } catch (Exception e) {
            System.err.println("Failed to load car seed data: " + e.getMessage());
        }

    }

    private static String alphaNumericString() {
        String AB = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        SecureRandom random = new SecureRandom();

        StringBuilder sb = new StringBuilder(20);
        for (int i = 0; i < 20; i++) {
            sb.append(AB.charAt(random.nextInt(AB.length())));
        }
        return sb.toString();
    }
}
