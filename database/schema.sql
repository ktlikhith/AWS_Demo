
CREATE DATABASE bookstore;
USE bookstore;

CREATE TABLE books(
 id INT PRIMARY KEY AUTO_INCREMENT,
 title VARCHAR(255),
 author VARCHAR(255),
 price DECIMAL(10,2)
);

INSERT INTO books(title,author,price)
VALUES
('AWS Basics','John Doe',499),
('Docker Deep Dive','Nigel',699),
('Kubernetes Guide','Mark',799);
