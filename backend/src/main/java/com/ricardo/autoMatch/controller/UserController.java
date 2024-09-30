package com.ricardo.autoMatch.controller;

import com.ricardo.autoMatch.dto.SignupRequestDTO;
import com.ricardo.autoMatch.model.User;
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

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<User> register(@RequestBody SignupRequestDTO signupRequestDTO) {
        return ResponseEntity.ok(userService.signup(signupRequestDTO));
    }
}
