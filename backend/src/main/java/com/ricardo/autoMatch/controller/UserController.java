package com.ricardo.autoMatch.controller;

import com.ricardo.autoMatch.dto.LoginRequestDTO;
import com.ricardo.autoMatch.dto.LoginResponseDTO;
import com.ricardo.autoMatch.dto.SignupRequestDTO;
import com.ricardo.autoMatch.dto.SignupResponseDTO;
import com.ricardo.autoMatch.model.User;
import com.ricardo.autoMatch.service.JWTService;
import com.ricardo.autoMatch.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
