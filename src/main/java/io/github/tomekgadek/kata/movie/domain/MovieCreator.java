package io.github.tomekgadek.kata.movie.domain;

import io.github.tomekgadek.kata.movie.dto.MovieDto;

import static java.util.Objects.requireNonNull;

class MovieCreator {

    Movie from(MovieDto filmDto) {
        requireNonNull(filmDto);
        return Movie.builder()
                .movieId(filmDto.getMovieId())
                .title(filmDto.getTitle())
                .image(filmDto.getImage())
                .releaseYear(filmDto.getReleaseYear())
                .videoId(filmDto.getVideoId())
                .build();
    }
}
