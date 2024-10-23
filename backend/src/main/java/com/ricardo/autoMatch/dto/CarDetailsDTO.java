package com.ricardo.autoMatch.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CarDetailsDTO {

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
    private List<CarImageDTO> images;
    private UserDTO user;
}
