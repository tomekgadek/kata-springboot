DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
    movie_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    image VARCHAR(300),
    release_year INT,
    video_id VARCHAR(100)
);

INSERT INTO movies VALUES (1, 'System', 'movies/img/system.webp', 1995, '46qKHq7REI4');
INSERT INTO movies VALUES (2, 'Transcendencja', '', 2014, 'LSzU9juz6vc');
INSERT INTO movies VALUES (3, 'Kontrola absolutna', 'movies/img/control.webp', 2016, '_W_1dmcSthE');
INSERT INTO movies VALUES (4, 'Kod nieśmiertelności', 'movies/img/sourcecode.webp', 2011, 'yG4omp0xO6o');
INSERT INTO movies VALUES (5, 'Ex Machina', 'movies/img/exmachina.webp', 2015, 'OD_vO9-Ztr8');
INSERT INTO movies VALUES (6, 'Hakerzy', 'movies/img/hackers.webp', 1995, 'Rn2cf_wJ4f4');
INSERT INTO movies VALUES (7, 'Tron', 'movies/img/tron-classic.webp', 1992, '3efV2wqEjEY');
INSERT INTO movies VALUES (8, 'Tron: Dziedzictwo', 'movies/img/tron.webp', 2010, 'P78pl1FUXfA');
INSERT INTO movies VALUES (9, 'Ja, robot', 'movies/img/robot.webp', 2004, 's0f3JeDVeEo');
INSERT INTO movies VALUES (10, 'Piraci z Krzemowej Doliny', 'movies/img/pirates.webp', 1999, 'lEyrivrjAuU');
