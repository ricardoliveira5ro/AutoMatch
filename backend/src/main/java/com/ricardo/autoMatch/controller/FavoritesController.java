package com.ricardo.autoMatch.controller;

import com.ricardo.autoMatch.dto.CarDTO;
import com.ricardo.autoMatch.model.Favorite;
import com.ricardo.autoMatch.service.FavoritesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favorites")
public class FavoritesController {

    private final FavoritesService favoritesService;

    @Autowired
    public FavoritesController(FavoritesService favoritesService) {
        this.favoritesService = favoritesService;
    }

    @GetMapping("/")
    public ResponseEntity<List<CarDTO>> getFavorites() {
        return ResponseEntity.ok(favoritesService.getAllFavorites());
    }

    @PostMapping("/{carId}")
    public ResponseEntity<String> addToFavorites(@PathVariable int carId) {
        return ResponseEntity.ok(favoritesService.addFavorite((long) carId));
    }

    @DeleteMapping("/{carId}")
    public ResponseEntity<String> removeFavorite(@PathVariable int carId) {
        return ResponseEntity.ok(favoritesService.removeFavorite((long) carId));
    }
}
