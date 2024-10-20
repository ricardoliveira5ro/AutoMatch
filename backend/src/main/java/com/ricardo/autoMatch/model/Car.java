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
@Table(name = "cars")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "make", nullable = false)
    private String make;

    @Column(name = "model", nullable = false)
    private String model;

    @Column(name = "condition", nullable = false)
    @Enumerated(EnumType.STRING)
    private Condition condition;

    @Column(name = "price", nullable = false)
    private Float price;

    @Column(name = "style", nullable = false)
    @Enumerated(EnumType.STRING)
    private Style style;

    @Column(name = "date", nullable = false)
    private Date date;

    @Column(name = "mileage", nullable = false)
    private Integer mileage;

    @Column(name = "fuel_type", nullable = false)
    @Enumerated(EnumType.STRING)
    private FuelType fuelType;

    @Column(name = "gear_box", nullable = false)
    @Enumerated(EnumType.STRING)
    private GearBox gearBox;

    @Column(name = "color")
    @Enumerated(EnumType.STRING)
    private Color color;

    @Column(name = "doors")
    private Integer doors;

    @Column(name = "displacement", nullable = false)
    private Integer displacement;

    @Column(name = "horse_power", nullable = false)
    private Integer horsePower;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
