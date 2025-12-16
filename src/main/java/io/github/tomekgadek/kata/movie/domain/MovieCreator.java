package io.github.tomekgadek.kata.movie.domain;

import io.github.tomekgadek.kata.movie.dto.MovieDto;

import static java.util.Objects.requireNonNull;

class MovieCreator {

    Movie from(MovieDto movieDto) {
        requireNonNull(movieDto);
        return Movie.builder()
                .movieId(movieDto.getMovieId())
                .title(movieDto.getTitle())
                .image(movieDto.getImage())
                .releaseYear(movieDto.getReleaseYear())
                .videoId(movieDto.getVideoId())
                .build();
    }
}
