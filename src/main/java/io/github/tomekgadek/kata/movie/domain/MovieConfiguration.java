package io.github.tomekgadek.kata.movie.domain;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class MovieConfiguration {

    MovieFacade movieFacade() {
        return movieFacade(new InMemoryMovieRepository());
    }

    @Bean
    MovieFacade movieFacade(MovieRepository movieRepository) {
        MovieCreator movieCreator = new MovieCreator();
        return new MovieFacade(movieRepository, movieCreator);
    }
}
