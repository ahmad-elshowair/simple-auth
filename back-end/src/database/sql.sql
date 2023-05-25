-- create database

CREATE DATABASE authenticity OWNER=ahmad_elshowair;

-- create extension

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