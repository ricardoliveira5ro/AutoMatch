package com.ricardo.autoMatch.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
@Table(name = "car_images")
public class CarImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Lob
    @Column(name = "image_data")
    private String imageData;

    @Column(name = "order_image")
    private Integer order;

    @ManyToOne
    @JoinColumn(name = "car_id")
    private Car car;

    public CarImage(String imageData, Integer order) {
        this.imageData = imageData;
        this.order = order;
    }
}
