package com.ricardo.autoMatch.controller;

import com.ricardo.autoMatch.utils.Utils;
import com.ricardo.autoMatch.dto.*;
import com.ricardo.autoMatch.model.User;
import com.ricardo.autoMatch.service.JWTService;
import com.ricardo.autoMatch.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final JWTService jwtService;

    @Autowired
    public UserController(UserService userService, JWTService jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }

    @PostMapping("/signup")
    public ResponseEntity<SignupResponseDTO> register(@RequestBody SignupRequestDTO signupRequestDTO) {
        User user = userService.signup(signupRequestDTO);

        SignupResponseDTO userResponse = SignupResponseDTO.builder()
                                                .id(user.getId())
                                                .email(user.getContactEmail())
                                                .build();

        return ResponseEntity.ok(userResponse);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginRequestDTO loginRequestDTO) {
        User user = userService.authenticate(loginRequestDTO);

        String token = jwtService.generateToken(user);

        LoginResponseDTO response = LoginResponseDTO.builder()
                                        .username(user.getUsername())
                                        .token(token)
                                        .expiresIn(jwtService.getExpirationTime())
                                        .build();

        return ResponseEntity.ok(response);
    }

    @GetMapping("/profile")
    public ResponseEntity<UserDTO> getUserInfo() {
        return ResponseEntity.ok(convertToUserDTO(Utils.getCurrentUser()));
    }

    private UserDTO convertToUserDTO(User user) {
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
