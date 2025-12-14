package io.github.tomekgadek.kata.movie;

import io.github.tomekgadek.kata.movie.domain.MovieFacade;
import io.github.tomekgadek.kata.movie.dto.MovieDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
class MovieController {
    private final MovieFacade movieFacade;

    public MovieController(MovieFacade filmFacade) {
        this.movieFacade = filmFacade;
    }

    @GetMapping("movies")
    Page<MovieDto> getFilms(Pageable pageable) {
        return movieFacade.findAll(pageable);
    }

    @GetMapping("movies/{movieId}")
    MovieDto getFilm(@PathVariable Integer movieId) {
        return movieFacade.show(movieId);
    }
}
