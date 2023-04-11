-- Drop tables if they exist
DROP TABLE IF EXISTS reservation,client,dog CASCADE;

-- Create dog table
CREATE TABLE dog
(
    id    SERIAL PRIMARY KEY,
    name  VARCHAR(255) NOT NULL,
    breed VARCHAR(255) NOT NULL,
    age   INTEGER      NOT NULL
);
-- Create client table
CREATE TABLE client
(
    id     SERIAL PRIMARY KEY,
    name   VARCHAR(255) NOT NULL,
    dog_id INTEGER      NOT NULL,
    FOREIGN KEY (dog_id) REFERENCES dog (id)
);
-- Create reservation table
CREATE TABLE reservation
(
    id         SERIAL PRIMARY KEY,
    start_date DATE    NOT NULL,
    end_date   DATE    NOT NULL,
    client_id  INTEGER NOT NULL,
    FOREIGN KEY (client_id) REFERENCES client (id)
);


-- Insert 3 records into dog table
INSERT INTO dog (name, breed, age)
VALUES ('Buddy', 'Labrador', 3),
       ('Daisy', 'Golden Retriever', 2),
       ('Max', 'German Shepherd', 5);

-- Insert 3 records into user table
INSERT INTO client(name, dog_id)
VALUES ('John', 1),
       ('Jane', 2),
       ('Mark', 3);

-- Insert 3 records into reservation table
INSERT INTO reservation (start_date, end_date, client_id)
VALUES ('2023-04-12', '2023-04-14', 1),
       ('2023-04-15', '2023-04-17', 2),
       ('2023-04-18', '2023-04-20', 3);
