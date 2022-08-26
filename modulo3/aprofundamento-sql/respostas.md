# Respostas

## Exercício 1

a) 
ALTER TABLE Actor DROP COLUMN salary;

O comando DROP COLUMN é usado para deletar a coluna **salary** na tabela **Actor**.

b) 
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

O comando CHANGE altera o nome da variável **gender** para **sex**.

c) 
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

O comando CHANGE altera a quantidade de caracteres da variável **gender** para **255**.

d) 
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

## Exercício 2

a) 
UPDATE Actor
SET name = "Fernanda Torres"
WHERE id = "003";

b) 
UPDATE Actor
SET name = "TARCÍSIO MEIRA"
WHERE id = "004";

UPDATE Actor
SET name = "Tarcísio Meira"
WHERE id = "004";

c)
UPDATE Actor
SET 
	name = "Adriana Esteves", 
    salary = 460000,
    birth_date = "1969-12-15"
WHERE id = "003";

d) 
UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";

0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

Apesar de não ter erro, o resultado retornado do comando é zero

## Exercício 3

a) DELETE FROM Actor WHERE name = "Adriana Esteves";

b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

## Exercício 4

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor WHERE gender = "female";

c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor;

## Exercício 5

a) O comando retorna o número de atores e atrizes de acordo com o seu gênero 

b) SELECT id, name FROM Actor ORDER BY name DESC;

c) SELECT * FROM Actor ORDER BY salary;

d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;

## Exercício 6

a) ALTER TABLE Filmes ADD playing_limit_date DATE;

b) ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;

c) UPDATE Filmes SET playing_limit_date = "2020-12-31" WHERE id = "001";

d) 