CREATE TABLE movie (
    id IDENTITY PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    type VARCHAR(10) NOT NULL
);

INSERT INTO movie (title, type) VALUES
    ('Inception', 'AKCJA'),
    ('The Godfather', 'DRAMAT'),
    ('Superbad', 'KOMEDIA'),
    ('The Ring', 'HORROR'),
    ('Pulp Fiction', 'DRAMAT');
