-- create database

CREATE DATABASE authenticity OWNER=ahmad_elshowair;

-- create extention

CREATE EXTENSION "uuid-ossp";

-- create user table

CREATE TABLE
    users(
        user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_name VARCHAR(50) NOT NULL,
        user_email VARCHAR(255) NOT NULL,
        user_password VARCHAR(255) NOT NULL
    );

-- drop users's table

DROP TABLE users;

-- insert fake users

INSERT INTO
    users(
        user_name,
        user_email,
        user_password
    )
VALUES (
        'ahmad elshowair',
        'ahmad@mail.com',
        'ahmad123'
    ), (
        'thuy pahm',
        'thuy@mail.com',
        'thuy123'
    );

--display all users

SELECT * FROM users;

-- change the datatype of user_password column

ALTER TABLE users ALTER COLUMN user_password TYPE VARCHAR(255);