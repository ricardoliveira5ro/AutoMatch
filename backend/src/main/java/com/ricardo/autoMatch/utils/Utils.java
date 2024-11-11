package com.ricardo.autoMatch.utils;

import com.ricardo.autoMatch.dto.*;
import com.ricardo.autoMatch.exception.InvalidRequestBodyException;
import com.ricardo.autoMatch.exception.UnauthenticatedException;
import com.ricardo.autoMatch.model.Car;
import com.ricardo.autoMatch.model.CarImage;
import com.ricardo.autoMatch.model.User;
import com.ricardo.autoMatch.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Base64;
import java.util.Comparator;

public final class Utils {

    private Utils() {}

    public static void validateUserSignupRequest(UserRepository userRepository, SignupRequestDTO signupRequestDTO) {
        validateNullField(signupRequestDTO.getFirstName(), "firstName");
        validateNullField(signupRequestDTO.getLastName(), "lastName");
        validateNullField(signupRequestDTO.getEmail(), "email");
        validateNullField(signupRequestDTO.getPassword(), "password");

        if (userRepository.findByContactEmail(signupRequestDTO.getEmail()).orElse(null) != null)
            throw new InvalidRequestBodyException("Email already exists");
    }

    public static void validateUserLoginRequest(LoginRequestDTO loginRequestDTO) {
        validateNullField(loginRequestDTO.getEmail(), "email");
        validateNullField(loginRequestDTO.getPassword(), "password");
    }

    private static void validateNullField(String value, String fieldName) {
        if (value == null || value.isBlank()) {
            throw new InvalidRequestBodyException("'" + fieldName + "' cannot be null or blank");
        }
    }

    public static User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication.getName().equals("anonymousUser")) {
            throw new UnauthenticatedException("No user authenticated");
        }

        return (User) authentication.getPrincipal();
    }

    public static CarDTO convertToCarDTO(Car car) {
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
                Base64.getEncoder().encodeToString(car.getImgCover()),
                car.isRecommended()
        );
    }

    public static CarDetailsDTO convertToCarDetailsDTO(Car car) {
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

    public static UserDTO convertToUserDTO(User user) {
        return UserDTO.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .contactEmail(user.getContactEmail())
                .contactPhone(user.getContactPhone())
                .location(user.getLocation())
                .build();
    }
}
