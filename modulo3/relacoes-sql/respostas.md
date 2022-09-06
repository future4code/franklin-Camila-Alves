# Respostas 

## Exercício 1

**A**

Chave estrangeira (foreign key) é o campo que estabelece o relacionamento entre duas tabelas. Assim, uma coluna corresponde à mesma coluna que é a chave primária de outra tabela. Dessa forma, deve-se especificar na tabela que contém a chave estrangeira quais são essas colunas e à qual tabela está relacionada. O banco de dados irá verificar se todos os campos que fazem referências à tabela estão especificados.

**B**
```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
		comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
		movie_id INT,
		FOREIGN KEY (movie_id) REFERENCES Filmes(id)
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Sdds quando assistia na sessão da tarde",
    6,
	"001"
);
```

**C** 

Não foi possível adicionar ou atualizar porque a chave estrangeira não existe.

## Exercício 2

**A**

As duas variáveis da tabela (movie_id e actor_id) estão diretamente referenciadas as variáveis id das tabelas Filmes e Actor respectivamente.

**B**
```
INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
	"001", 
    <!-- Se eu Fosse Você -->
    "001"  
    <!-- Tony Ramos -->
);
```
**C**

Não foi possível adicionar ou atualizar porque a chave estrangeira actor_id não existe.

**D**

Não foi possível deletar porque a variável (id da tabela Actor) é referenciada na chave estrangeira actor_id da tabela MoieCast.

## Exercício 3

**A**

```
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
````
A query acima faz a junção das informações da tabela Movie com a Rating com o auxílio da chave estrangeira, onde o ON faz a referência da chave primária com a chave estrangeira.

