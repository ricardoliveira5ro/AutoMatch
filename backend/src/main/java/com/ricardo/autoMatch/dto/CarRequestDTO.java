package com.ricardo.autoMatch.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Setter
public class CarRequestDTO {

    private List<MultipartFile> images;
    private String title;
    private String condition;
    private String make;
    private String model;
    private String gearBox;
    private String fuelType;
    private String style;
    private String mileage;
    private String price;
    private String horsePower;
    private String displacement;
    private String date;
    private String color;
    private String doors;
    private String description;
}
