package com.ricardo.autoMatch.configuration;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ricardo.autoMatch.model.User;
import com.ricardo.autoMatch.repository.CarRepository;
import com.ricardo.autoMatch.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.security.SecureRandom;
import java.util.List;

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
