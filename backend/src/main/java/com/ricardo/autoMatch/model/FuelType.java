package com.ricardo.autoMatch.model;

public enum FuelType {

    GASOLINE("Gasoline"),
    DIESEL("Diesel"),
    HYBRID("Hybrid"),
    ELECTRIC("Electric"),
    HYDROGEN("Hydrogen");

    private final String value;

    FuelType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
