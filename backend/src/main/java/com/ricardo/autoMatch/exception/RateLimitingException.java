package com.ricardo.autoMatch.exception;

public class RateLimitingException extends RuntimeException {
    public RateLimitingException(String message) {
        super(message);
    }

    public RateLimitingException(String message, Throwable throwable) {
        super(message, throwable);
    }

    public RateLimitingException(Throwable throwable) {
        super(throwable);
    }
}
