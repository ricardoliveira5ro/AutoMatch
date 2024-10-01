package com.ricardo.autoMatch.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class LoginResponseDTO {

    private final String username;
    private final String token;
    private final long expiresIn;
}
