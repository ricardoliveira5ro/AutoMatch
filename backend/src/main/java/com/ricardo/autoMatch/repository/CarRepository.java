package com.ricardo.autoMatch.repository;

import com.ricardo.autoMatch.model.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {

    List<Car> findByRecommendedTrue();

    @Query("SELECT c FROM Car c WHERE" +
            " (:make IS NULL OR UPPER(c.make) = :make)" +
            " AND (:model IS NULL OR UPPER(c.model) = :model)" +
            " AND (:fuelType IS NULL OR c.fuelType = :fuelType)" +
            " AND (:selectedYear IS NULL OR EXTRACT(YEAR FROM c.date) = :selectedYear)" +
            " AND (:minYear IS NULL OR EXTRACT(YEAR FROM c.date) >= :minYear)" +
            " AND (:maxYear IS NULL OR EXTRACT(YEAR FROM c.date) <= :maxYear)" +
            " AND (:minMileage IS NULL OR c.mileage >= :minMileage)" +
            " AND (:maxMileage IS NULL OR c.mileage <= :maxMileage)" +
            " AND (:minPrice IS NULL OR c.price >= :minPrice)" +
            " AND (:maxPrice IS NULL OR c.price <= :maxPrice)" +
            " AND (:minHorsePower IS NULL OR c.horsePower >= :minHorsePower)" +
            " AND (:maxHorsePower IS NULL OR c.horsePower <= :maxHorsePower)" +
            " AND (:searchQuery IS NULL OR (UPPER(c.description) LIKE %:searchQuery% OR UPPER(c.title) LIKE %:searchQuery%))" +
            " AND (:gearBox IS NULL OR c.gearBox = :gearBox)" +
            " AND (:condition IS NULL OR c.condition = :condition)" +
            " AND (:color IS NULL OR c.color = :color)" +
            " AND (:doors IS NULL OR c.doors = :doors)" +
            " AND (:minDisplacement IS NULL OR c.displacement >= :minDisplacement)" +
            " AND (:maxDisplacement IS NULL OR c.displacement <= :maxDisplacement)" +
            " AND (:styles IS NULL OR c.style IN (:styles))"
    )
    Page<Car> findFiltered(
            @Param("make") String make,
            @Param("model") String model,
            @Param("fuelType") FuelType fuelType,
            @Param("selectedYear") Integer selectedYear,
            @Param("minYear") Integer minYear,
            @Param("maxYear") Integer maxYear,
            @Param("minMileage") Integer minMileage,
            @Param("maxMileage") Integer maxMileage,
            @Param("minPrice") Float minPrice,
            @Param("maxPrice") Float maxPrice,
            @Param("minHorsePower") Integer minHorsePower,
            @Param("maxHorsePower") Integer maxHorsePower,
            @Param("searchQuery") String searchQuery,
            @Param("gearBox") GearBox gearBox,
            @Param("condition") Condition condition,
            @Param("color") Color color,
            @Param("doors") Integer doors,
            @Param("minDisplacement") Integer minDisplacement,
            @Param("maxDisplacement") Integer maxDisplacement,
            @Param("styles") List<Style> styles,
            Pageable pageable
    );

    List<Car> findByUser(User user);
}
