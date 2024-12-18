package com.ricardo.autoMatch.exception;

import io.jsonwebtoken.JwtException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Objects;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<ErrorResponse> handleException(Exception exception) {

        if (exception instanceof NotFoundException)
            return new ResponseEntity<>(new ErrorResponse(HttpStatus.NOT_FOUND.value(), exception.getMessage()), HttpStatus.NOT_FOUND);

        if (exception instanceof JwtException ||
            exception instanceof BadCredentialsException ||
            exception instanceof UnauthenticatedException ||
            exception instanceof UnauthorizedException
        )
            return new ResponseEntity<>(new ErrorResponse(HttpStatus.UNAUTHORIZED.value(), exception.getMessage()), HttpStatus.UNAUTHORIZED);

        if (exception instanceof InvalidRequestBodyException)
            return new ResponseEntity<>(new ErrorResponse(HttpStatus.UNPROCESSABLE_ENTITY.value(), exception.getMessage()), HttpStatus.UNPROCESSABLE_ENTITY);

        if (exception instanceof MethodArgumentNotValidException) {
            String message = Objects.requireNonNull(((MethodArgumentNotValidException) exception).getBindingResult().getFieldError()).getDefaultMessage();
            return new ResponseEntity<>(new ErrorResponse(HttpStatus.BAD_REQUEST.value(), message), HttpStatus.BAD_REQUEST);
        }

        if (exception instanceof RateLimitingException) {
            return new ResponseEntity<>(new ErrorResponse(HttpStatus.TOO_MANY_REQUESTS.value(), exception.getMessage()), HttpStatus.TOO_MANY_REQUESTS);
        }

        // Default
        return new ResponseEntity<>(new ErrorResponse(HttpStatus.BAD_REQUEST.value(), exception.getMessage()), HttpStatus.BAD_REQUEST);
    }
}
