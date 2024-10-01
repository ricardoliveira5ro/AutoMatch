package com.ricardo.autoMatch.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class SignupResponseDTO {

    private int id;
    private String email;
}
