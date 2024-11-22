package com.ricardo.autoMatch.service;

import com.ricardo.autoMatch.dto.LoginRequestDTO;
import com.ricardo.autoMatch.dto.SignupRequestDTO;
import com.ricardo.autoMatch.dto.UserInfoRequestDTO;
import com.ricardo.autoMatch.model.User;
import com.ricardo.autoMatch.repository.UserRepository;
import com.ricardo.autoMatch.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }

    public User signup(SignupRequestDTO signupRequestDTO) {
        Utils.validateUserSignupRequest(userRepository, signupRequestDTO);

        User user = new User(
                signupRequestDTO.getFirstName(),
                signupRequestDTO.getLastName(),
                passwordEncoder.encode(signupRequestDTO.getPassword()),
                signupRequestDTO.getEmail(),
                signupRequestDTO.getContactPhone()
        );

        return userRepository.save(user);
    }

    public User authenticate(LoginRequestDTO loginRequestDTO) {
        Utils.validateUserLoginRequest(loginRequestDTO);

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequestDTO.getEmail(), loginRequestDTO.getPassword())
        );

        return userRepository.findByContactEmail(loginRequestDTO.getEmail()).orElseThrow();
    }

    public User updateUserInfo(UserInfoRequestDTO userInfoRequestDTO) {
        User user = Utils.getCurrentUser();

        user.setFirstName(userInfoRequestDTO.getFirstName());
        user.setLastName(userInfoRequestDTO.getLastName());
        user.setContactPhone(userInfoRequestDTO.getContactPhone());

        String location = userInfoRequestDTO.getLocation() != null && !userInfoRequestDTO.getLocation().isEmpty() ?
                                    userInfoRequestDTO.getLocation() : null;
        user.setLocation(location);

        return userRepository.save(user);
    }
}
