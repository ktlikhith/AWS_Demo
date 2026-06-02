CREATE DATABASE bookstore;

USE bookstore;

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    author VARCHAR(255)
);

INSERT INTO books(title,author)
VALUES
('AWS Fundamentals','John Doe'),
('NodeJS Guide','Jane Smith');