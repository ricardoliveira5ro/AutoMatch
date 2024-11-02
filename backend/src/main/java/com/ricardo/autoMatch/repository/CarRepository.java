package com.ricardo.autoMatch.repository;

import com.ricardo.autoMatch.model.Car;
import com.ricardo.autoMatch.model.FuelType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {

    List<Car> findByRecommendedTrue();

    @Query("SELECT c FROM Car c WHERE" +
            "(?1 IS NULL OR UPPER(c.make) = ?1)" +
            "AND (?2 IS NULL OR UPPER(c.model) = ?2)" +
            "AND (?3 IS NULL OR c.fuelType = ?3)" +
            "AND (?4 IS NULL OR EXTRACT(YEAR FROM c.date) = ?4)" +
            "AND (?5 IS NULL OR c.mileage <= ?5)" +
            "AND (?6 IS NULL OR c.price <= ?6)" +
            "AND (?7 IS NULL OR c.horsePower >= ?7)" +
            "AND (?8 IS NULL OR UPPER(c.description) LIKE %?8%)"
    )
    List<Car> findFiltered(String make, String model, FuelType fuelType, Integer year, Integer maxMileage, Float maxPrice, Integer minHorsePower, String searchQuery);
}
