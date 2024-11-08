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
public class CarDTO {

    private Long id;
    private String title;
    private Float price;
    private Date date;
    private Integer mileage;
    private String fuelType;
    private String gearBox;
    private Integer displacement;
    private Integer horsePower;
    //private String imgCover;
    private boolean recommended;
}