CREATE DATABASE lojao; /*CRIA UMA BASE DE DADOS*/

USE lojao;

CREATE TABLE produto(
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    preco FLOAT NOT NULL,
    descricao VARCHAR(150)
);

CREATE TABLE pedidos(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    produto_id INTEGER,
    cliente VARCHAR(150),
    quantidade INTEGER,
    data DATETIME,
    FOREIGN KEY (produto_id) REFERENCES produto(id)
);

INSERT INTO produto (preco, nome, descricao)
VALUES (10.50, "Maquiaji", "Qualidade Galantida");

SELECT * FROM produto;

SELECT nome, preco FROM produto;