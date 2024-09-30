package com.ricardo.autoMatch.model;

public enum GearBox {

    AUTOMATIC("Automatic"),
    MANUAL("Manual");

    private final String value;

    GearBox(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
