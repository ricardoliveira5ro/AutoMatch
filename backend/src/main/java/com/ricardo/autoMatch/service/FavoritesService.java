package com.ricardo.autoMatch.service;

import com.ricardo.autoMatch.dto.CarDTO;
import com.ricardo.autoMatch.exception.NotFoundException;
import com.ricardo.autoMatch.model.Car;
import com.ricardo.autoMatch.model.Favorite;
import com.ricardo.autoMatch.repository.CarRepository;
import com.ricardo.autoMatch.repository.FavoritesRepository;
import com.ricardo.autoMatch.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Base64;
import java.util.List;
import java.util.Optional;

@Service
public class FavoritesService {

    private final FavoritesRepository favoritesRepository;
    private final CarRepository carRepository;

    @Autowired
    public FavoritesService(FavoritesRepository favoritesRepository, CarRepository carRepository) {
        this.favoritesRepository = favoritesRepository;
        this.carRepository = carRepository;
    }

    @Transactional(readOnly = true)
    public List<CarDTO> getAllFavorites() {
        List<Favorite> favorites = favoritesRepository.findByUser(Utils.getCurrentUser());

        return favorites.stream().map(favorite -> Utils.convertToCarDTO(favorite.getCar())).toList();
    }

    public String addFavorite(Long carId) {
        Car car = carRepository.findById(carId).orElseThrow(() -> new NotFoundException("Car not found"));

        Optional<Favorite> favorite = favoritesRepository.findByUserAndCar(Utils.getCurrentUser(), car);

        if (favorite.isEmpty()) {
            Favorite newFavorite = new Favorite();
            newFavorite.setUser(Utils.getCurrentUser());
            newFavorite.setCar(car);

            favoritesRepository.save(newFavorite);
        }

        return "Success";
    }

    public String removeFavorite(Long carId) {
        Car car = carRepository.findById(carId).orElseThrow(() -> new NotFoundException("Car not found"));
        Optional<Favorite> favorite = favoritesRepository.findByUserAndCar(Utils.getCurrentUser(), car);

        favorite.ifPresent(favoritesRepository::delete);

        return "Success";
    }
}
