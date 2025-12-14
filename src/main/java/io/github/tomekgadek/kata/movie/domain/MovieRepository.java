package io.github.tomekgadek.kata.movie.domain;

import io.github.tomekgadek.kata.movie.dto.MovieNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.Repository;

interface MovieRepository extends Repository<Movie, Integer> {
    Movie save(Movie Movie);
    Movie findByMovieId(Integer movieId);
    void deleteByMovieId(Integer movieId);
    Page<Movie> findAll(Pageable pageable);

    default Movie findOneOrThrow(Integer movieId) {
        Movie Movie = findByMovieId(movieId);
        if(Movie == null) {
            throw new MovieNotFoundException(movieId);
        }
        return Movie;
    }
}
