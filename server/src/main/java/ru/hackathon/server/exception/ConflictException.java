package ru.hackathon.server.exception;

public class ConflictException extends RuntimeException {

    public ConflictException(String message) {
        super(message);
    }

}