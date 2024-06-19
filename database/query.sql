-----------------------------------------------------------------------------

CREATE DATABASE fbi_database;

-----------------------------------------------------------------------------

CREATE TABLE fbi_agents ( 
    email VARCHAR(50) NOT NULL UNIQUE, 
    password VARCHAR(255) NOT NULL);

-----------------------------------------------------------------------------

SEEDING DE DATOS:

INSERT INTO fbi_agents 
VALUES 
('who@fbi.com', 'me'),
('where@fbi.com', 'there'),
('how@fbi.com', 'exactly')