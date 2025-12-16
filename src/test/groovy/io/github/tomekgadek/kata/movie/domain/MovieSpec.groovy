package io.github.tomekgadek.kata.movie.domain

import io.github.tomekgadek.kata.movie.dto.MovieDto
import org.aspectj.lang.annotation.After
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Sort
import spock.lang.Specification

class MovieSpec extends Specification implements SampleMovies {
    MovieFacade facade = new MovieConfiguration().movieFacade()

    @After
    def "remove movies"() {
        facade.delete(1, 2)
    }

    def "should add movie"() {
        when: "we add a movie"
        facade.add(system)

        then: "system has this movie"
        facade.show(system.movieId) == system
    }

    def "should list movies"() {
        given: "we have two movies in system"
        facade.add(system)
        facade.add(pirates)

        when: "we ask for all movies"
        Page<MovieDto> foundMovies = facade.findAll(new PageRequest(0, 4, Sort.by("movieId")))

        then: "system returns the movies we have added"
        foundMovies.getTotalElements() == 2
        foundMovies.contains(system)
        foundMovies.contains(pirates)
    }
}
