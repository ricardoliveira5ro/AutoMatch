package com.ricardo.autoMatch.repository;

import com.ricardo.autoMatch.model.Car;
import com.ricardo.autoMatch.model.Favorite;
import com.ricardo.autoMatch.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FavoritesRepository extends JpaRepository<Favorite, Long> {

    List<Favorite> findByUser(User user);

    Optional<Favorite> findByUserAndCar(User user, Car car);
}
