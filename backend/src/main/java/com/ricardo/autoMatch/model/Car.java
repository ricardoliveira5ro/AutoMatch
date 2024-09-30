package com.ricardo.autoMatch.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
@Table(name = "car")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "make")
    private String make;

    @Column(name = "model")
    private String model;

    @Column(name = "condition")
    private Condition condition;

    @Column(name = "price")
    private Float price;

    @Column(name = "style")
    private Style style;

    @Column(name = "date")
    private Date date;

    @Column(name = "mileage")
    private Integer mileage;

    @Column(name = "fuel_type")
    private FuelType fuelType;

    @Column(name = "gear_box")
    private String gearBox;

    @Column(name = "color")
    private Color color;

    @Column(name = "doors")
    private Integer doors;

    @Column(name = "displacement")
    private Integer displacement;

    @Column(name = "horse_power")
    private Integer horsePower;
}
