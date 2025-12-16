package io.github.tomekgadek.kata.movie.dto;

public class MovieNotFoundException extends RuntimeException {
    public MovieNotFoundException(Integer movieId) {
        super("No movie of id " + movieId + " found", null, false, false);
    }
}

