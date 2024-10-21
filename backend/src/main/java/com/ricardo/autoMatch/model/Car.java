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

    @Column(name = "title")
    private String title;

    @Column(name = "description", length = 2048)
    private String description;

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

    @Lob
    @Column(name = "img_cover")
    private String imgCover;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public Car(String title, String description, String make, String model, Condition condition, Float price, Style style, Date date, Integer mileage, FuelType fuelType, GearBox gearBox, Color color, Integer doors, Integer displacement, Integer horsePower) {
        this.title = title;
        this.description = description;
        this.make = make;
        this.model = model;
        this.condition = condition;
        this.price = price;
        this.style = style;
        this.date = date;
        this.mileage = mileage;
        this.fuelType = fuelType;
        this.gearBox = gearBox;
        this.color = color;
        this.doors = doors;
        this.displacement = displacement;
        this.horsePower = horsePower;
    }
}
