package io.github.tomekgadek.kata.movie.domain;

import groovy.transform.CompileStatic
import io.github.tomekgadek.kata.movie.dto.MovieDto

@CompileStatic
trait SampleMovies {

    MovieDto system = this.createMovieDto(1, "System", 1995, "/static/movies/img/system.jpg", "46qKHq7REI4")
    MovieDto tron = this.createMovieDto(2, "Piraci z Krzemowej Doliny", 1999, "./static/movies/img/pirates.jpg", "lEyrivrjAuU")

    static private MovieDto createMovieDto(Integer movieId, String title, Integer releaseYear, String image, String videoId) {
        return MovieDto.builder()
                .movieId(movieId)
                .title(title).releaseYear(1995)
                .image(image)
                .videoId(videoId)
                .releaseYear(releaseYear)
                .build()
    }
}
