-- CREATE TABLE pokedex

-- INSERT INTO pokedex bulbasaur, charmander, squirtle

CREATE TABLE pokemon (id SERIAL PRIMARY KEY, hp INTEGER, name VARCHAR(50), type VARCHAR(50), region VARCHAR(25));

INSERT INTO pokemon (name, hp, type, region) VALUES ('pikachu', 50, 'electric', 'kanto'), ('bulbasaur', 50, 'grass/poison', 'kanto'), ('charmander', 50, 'fire', 'kanto'), ('squirtle', 50, 'water', 'kanto'), ('turtwig', 50, 'grass/ground', 'sinnoh');

