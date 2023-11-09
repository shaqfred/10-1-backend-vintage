DROP DATABASE IF EXISTS vintage_dev;
CREATE DATABASE vintage_dev;

\c vintage_dev;

CREATE TABLE vintage (
    id SERIAL PRIMARY KEY,
    name TEXT  NOT NULL,
    style TEXT NOT NULL,
    category TEXT NOT NULL,
    price INTEGER 
);
