package com.ricardo.autoMatch.dto;

import lombok.*;

@Getter
@Setter
@Builder
public class UserDTO {

    private Long id;
    private String firstName;
    private String lastName;
    private String contactEmail;
    private String contactPhone;
    private String location;
}
