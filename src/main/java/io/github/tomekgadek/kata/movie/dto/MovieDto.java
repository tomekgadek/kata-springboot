package io.github.tomekgadek.kata.movie.dto;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Builder
@Getter
@EqualsAndHashCode
public class MovieDto {
    private String title;
}

