CREATE DATABASE IF NOT EXISTS aplicacion;

USE aplicacion;

CREATE TABLE usuarios (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    edad INT NOT NULL,
    email VARCHAR(250) NOT NULL UNIQUE,
    avatar VARCHAR(1000)
);

ALTER TABLE gente RENAME usuarios;
ALTER TABLE usuarios ADD COLUMN avatar VARCHAR(1000);
ALTER TABLE usuarios CHANGE COLUMN avatar foto_de_perfil VARCHAR(1000);
ALTER TABLE usuarios DROP COLUMN foto_de_perfil;

INSERT INTO usuarios (nombre, edad, email) VALUES 
	("Roberto", 42, "roberto@gmail.com"),
    ("Marta", 22, "marta@gmail.com"),
    ("Parangaricuatirimicuaro", 25, "parangaricuatirimicuaro@gmail.com"),
    ("Clara", 33, "clara@gmail.com"),
    ("Dany", 42, "danyelmaskpo@gmail.com"),
    ("Adrian", 18, "adrian@gmail.com"),
    ("Manu", 42, "manu@gmail.com");
    
SELECT * FROM usuarios;
SELECT * FROM usuarios WHERE email = "danyelmaskpo@gmail.com";
SELECT * FROM usuarios WHERE nombre LIKE "%a%";

SELECT * FROM usuarios ORDER BY edad ASC;
SELECT * FROM usuarios ORDER BY edad DESC;

SELECT DISTINCT edad FROM usuarios ORDER BY edad ASC;

SELECT AVG(edad) AS promedio_edad FROM usuarios;

CREATE TABLE publicaciones (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    usuario_id INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

SELECT 
	publicaciones.id AS numero_de_publicacion, 
    publicaciones.title AS titulo, 
    publicaciones.content AS cuerpo_de_la_publi, 
    usuarios.nombre AS autor,
    usuarios.email AS contacto
FROM publicaciones
INNER JOIN usuarios ON publicaciones.usuario_id = usuarios.id 
ORDER BY publicaciones.title ASC;

INSERT INTO publicaciones (title, content, usuario_id) VALUES
	("Titulo", "Contenido", 3),
    ("Cuento", "Blablabla", 4),
    ("Titulazo", "Conteniduli", 2);

SELECT * FROM publicaciones;

