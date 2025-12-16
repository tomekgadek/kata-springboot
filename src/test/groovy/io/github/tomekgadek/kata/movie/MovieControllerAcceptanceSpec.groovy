package io.github.tomekgadek.kata.movie

import io.github.tomekgadek.kata.base.IntegrationSpec
import io.github.tomekgadek.kata.movie.domain.MovieFacade
import io.github.tomekgadek.kata.movie.domain.SampleMovies
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.test.context.support.WithMockUser
import org.springframework.test.web.servlet.ResultActions

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

class MovieControllerAcceptanceSpec extends IntegrationSpec implements SampleMovies {

    @Autowired
    MovieFacade movieFacade

    @WithMockUser
    def "should get movies"() {
        given: 'inventory has "system"'
        movieFacade.add(system)
        movieFacade.add(pirates)

        when: 'I go to /movie'
        ResultActions getMovies = mockMvc.perform(get("/movies?page=0&size=2"))

        then: 'I see details'
        getMovies.andExpect(status().isOk())
                .andExpect(content().json("""
                {
                    "content": [
                        {
                          "movieId":$system.movieId,
                          "title":"$system.title",
                          "releaseYear":$system.releaseYear,
                          "image":"$system.image",
                          "videoId":"$system.videoId"
                        },
                        {
                          "movieId":$pirates.movieId,
                          "title":"$pirates.title",
                          "releaseYear":$pirates.releaseYear,
                          "image":"$pirates.image",
                          "videoId":"$pirates.videoId"
                        }
                    ]
                }"""))

        when: 'I go to /movie'
        ResultActions getMovie = mockMvc.perform(get("/movies/$system.movieId"))

        then: 'I see movie'
        getMovie.andExpect(status().isOk())
                .andExpect(content().json("""
                        {
                          "movieId":$system.movieId,
                          "title":"$system.title",
                          "releaseYear":$system.releaseYear,
                          "image":"$system.image",
                          "videoId":"$system.videoId"
                        }
                """))
    }
}
