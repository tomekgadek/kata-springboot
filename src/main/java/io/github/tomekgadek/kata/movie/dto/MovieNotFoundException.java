package io.github.tomekgadek.kata.movie.dto;

public class MovieNotFoundException extends RuntimeException {
    public MovieNotFoundException(String title) {
        super("No film of title " + title + " found", null, false, false);
    }
}

