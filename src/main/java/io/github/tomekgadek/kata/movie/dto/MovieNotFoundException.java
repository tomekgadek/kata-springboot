package io.github.tomekgadek.kata.movie.dto;

public class MovieNotFoundException extends RuntimeException {
    public MovieNotFoundException(Integer movieId) {
        super("No film of id " + movieId + " found", null, false, false);
    }
}

