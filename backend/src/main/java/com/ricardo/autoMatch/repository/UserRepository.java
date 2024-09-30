package com.ricardo.autoMatch.repository;

import com.ricardo.autoMatch.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByContactEmail(String contactEmail);
}