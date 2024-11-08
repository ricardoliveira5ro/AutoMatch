package com.ricardo.autoMatch.utils;

import com.ricardo.autoMatch.dto.LoginRequestDTO;
import com.ricardo.autoMatch.dto.SignupRequestDTO;
import com.ricardo.autoMatch.exception.InvalidRequestBodyException;
import com.ricardo.autoMatch.exception.UnauthenticatedException;
import com.ricardo.autoMatch.model.User;
import com.ricardo.autoMatch.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

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
}
