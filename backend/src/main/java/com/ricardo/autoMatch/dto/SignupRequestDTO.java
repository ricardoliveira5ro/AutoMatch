package com.ricardo.autoMatch.dto;

import lombok.Getter;

@Getter
public class SignupRequestDTO {

    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private String contactPhone;
}
