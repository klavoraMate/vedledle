DROP TABLE IF EXISTS reservation,client,dog,image CASCADE;

CREATE TABLE client
(
    id       SERIAL PRIMARY KEY,
    name     VARCHAR(255) NOT NULL,
    email    VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role     VARCHAR(255) not NULL
);
CREATE TABLE dog
(
    id        SERIAL PRIMARY KEY,
    name      VARCHAR(255) NOT NULL,
    breed     VARCHAR(255) NOT NULL,
    size      VARCHAR(255) NOT NULL,
    age       INTEGER      NOT NULL,
    client_id INTEGER      NOT NULL,
    FOREIGN KEY (client_id) REFERENCES client (id)
);
CREATE TABLE reservation
(
    id         SERIAL PRIMARY KEY,
    start_date DATE    NOT NULL,
    end_date   DATE    NOT NULL,
    client_id  INTEGER NOT NULL,
    dog_id     INTEGER NOT NULL,
    FOREIGN KEY (client_id) REFERENCES client (id),
    FOREIGN KEY (dog_id) REFERENCES dog (id)
);
CREATE TABLE image
(
    id           SERIAL PRIMARY KEY,
    name         VARCHAR(255) UNIQUE,
    content_type VARCHAR(255),
    data         bytea
);


INSERT INTO client(name, email, password, role)
VALUES ('John', 'john@email.com', '$2y$10$SgQeaBY2ZkU5LPkuvyxJd.mhNQ3y7z5SMEWhLfEsGl36H0UmSpNIS', 'USER'),
       ('Jane', 'jane@email.com', '$2y$10$SgQeaBY2ZkU5LPkuvyxJd.mhNQ3y7z5SMEWhLfEsGl36H0UmSpNIS', 'ADMIN'),
       ('Mark', 'mark@email.com', '$2y$10$SgQeaBY2ZkU5LPkuvyxJd.mhNQ3y7z5SMEWhLfEsGl36H0UmSpNIS', 'USER');
INSERT INTO dog (name, breed, size, age, client_id)
VALUES ('Liza', 'GERMAN_SHEPHERD', 'LARGE', 7, 1),
       ('Vadóc', 'GERMAN_SHEPHERD', 'LARGE', 9, 1),
       ('Daisy', 'GOLDEN_RETRIEVER', 'MEDIUM', 2, 2);
