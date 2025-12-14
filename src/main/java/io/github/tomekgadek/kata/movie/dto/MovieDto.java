package io.github.tomekgadek.kata.movie.dto;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Builder
@Getter
@EqualsAndHashCode
public class MovieDto {
    private Integer movieId;
    private String title;
    private String image;
    private int releaseYear;
    private String videoId;
}
