package com.ricardo.autoMatch.model;

public enum Style {

    CONVERTIBLE("Convertible"),
    COUPE("Coupe"),
    ESTATE("Estate"),
    HATCHBACK("Hatchback"),
    MPV("MPV"),
    PICKUP("Pickup"),
    SALOON("Saloon"),
    SUV("SUV");

    private final String value;

    Style(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
