CREATE DATABASE formapp;

/*Crear una tabla*/
CREATE TABLE registro(
    id SERIAL PRIMARY KEY,
    email TEXT,
    titulo TEXT,
    descripcion TEXT
);

/*Insertar datos*/
INSERT INTO registro (email, titulo, descripcion) VALUES
