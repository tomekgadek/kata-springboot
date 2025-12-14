package io.github.tomekgadek.kata.movie.domain;


import io.github.tomekgadek.kata.movie.dto.MovieDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Builder
@Entity
@Table(name = "movies")
@AllArgsConstructor
@NoArgsConstructor
class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer movieId;
    private String title;
    private String image;
    private int releaseYear;
    private String videoId;

    MovieDto dto() {
        return MovieDto.builder()
                .movieId(movieId)
                .title(title)
                .image(image)
                .releaseYear(releaseYear)
                .videoId(videoId)
                .build();
    }
}
