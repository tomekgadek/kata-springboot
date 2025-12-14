package io.github.tomekgadek.kata.movie.domain;

import io.github.tomekgadek.kata.movie.dto.MovieDto;
import lombok.extern.java.Log;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;

import static java.util.Objects.requireNonNull;

@Transactional
@Log
public class MovieFacade {
    private final MovieRepository movieRepository;
    private final MovieCreator movieCreator;

    public MovieFacade(MovieRepository movieRepository, MovieCreator movieCreator) {
        this.movieRepository = movieRepository;
        this.movieCreator = movieCreator;
    }

    public MovieDto add(MovieDto movieDto) {
        requireNonNull(movieDto);
        Movie Movie = movieCreator.from(movieDto);
        Movie =  movieRepository.save(Movie);
        return Movie.dto();
    }

    public MovieDto show(Integer movieId) {
        requireNonNull(movieId);
        Movie Movie = movieRepository.findOneOrThrow(movieId);
        return Movie.dto();
    }

    public void delete(Integer... ids) {
        requireNonNull(ids);
        Arrays.stream(ids).forEach(movie -> movieRepository.deleteByMovieId(movie));
    }

    public Page<MovieDto> findAll(Pageable pageable) {
        requireNonNull(pageable);
        return movieRepository
                .findAll(pageable)
                .map(Movie::dto);
    }
}
