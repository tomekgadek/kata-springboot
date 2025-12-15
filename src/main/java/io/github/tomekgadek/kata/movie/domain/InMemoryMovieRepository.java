package io.github.tomekgadek.kata.movie.domain;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import java.util.ArrayList;
import java.util.concurrent.ConcurrentHashMap;

import static java.util.Objects.requireNonNull;

class InMemoryMovieRepository implements MovieRepository {
    private final ConcurrentHashMap<Integer, Movie> map = new ConcurrentHashMap<>();

    @Override
    public Movie save(Movie movie) {
        requireNonNull(movie);
        map.put(movie.dto().getMovieId(), movie);
        return movie;
    }

    @Override
    public Movie findByMovieId(Integer movieId) {
        return map.get(movieId);
    }

    @Override
    public void deleteByMovieId(Integer movieId) {
        map.remove(movieId);
    }

    @Override
    public Page<Movie> findAll(Pageable pageable) {
        return new PageImpl<>(new ArrayList<>(map.values()), pageable, map.size());
    }

}
