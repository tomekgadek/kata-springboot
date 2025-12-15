package io.github.tomekgadek.kata.movie.domain;

import io.github.tomekgadek.kata.infrastructure.log.Log;
import io.github.tomekgadek.kata.movie.dto.MovieDto;
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
        Movie movie = movieCreator.from(movieDto);
        movie =  movieRepository.save(movie);
        return movie.dto();
    }

    public MovieDto show(Integer movieId) {
        requireNonNull(movieId);
        Movie movie = movieRepository.findOneOrThrow(movieId);
        return movie.dto();
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
