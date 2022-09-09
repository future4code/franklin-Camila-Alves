CREATE TABLE professores_labenu (
		id INT PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
		CPF VARCHAR(255) NOT NULL UNIQUE,
        data_nasc INT,
        saldo INT
);