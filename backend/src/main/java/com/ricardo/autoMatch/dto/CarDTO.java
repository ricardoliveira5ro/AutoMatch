package com.ricardo.autoMatch.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CarDTO {

    private Long id;
    private String title;
    private String description;
    private String make;
    private String model;
    private String condition;
    private Float price;
    private String style;
    private Date date;
    private Integer mileage;
    private String fuelType;
    private String gearBox;
    private String color;
    private Integer doors;
    private Integer displacement;
    private Integer horsePower;
    private String imgCover;
    private UserDTO user;
}