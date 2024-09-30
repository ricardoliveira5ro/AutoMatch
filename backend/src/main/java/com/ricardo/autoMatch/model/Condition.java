package com.ricardo.autoMatch.model;

public enum Condition {

    NEW("New"),
    USED("Used");

    private final String value;

    Condition(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
