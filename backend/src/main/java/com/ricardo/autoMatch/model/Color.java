package com.ricardo.autoMatch.model;

public enum Color {

    BLACK("Black"),
    BLUE("BLue"),
    GREY("Grey"),
    WHITE("White"),
    SILVER("Silver"),
    RED("Red"),
    GREEN("Green"),
    BEIGE("Beige"),
    BRONZE("Bronze"),
    GOLD("Gold"),
    ORANGE("Orange"),
    PINK("Pink"),
    PURPLE("Purple"),
    YELLOW("Yellow");

    private final String value;

    Color(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
