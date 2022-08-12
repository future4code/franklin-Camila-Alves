// EXERCÍCIO 1

// a) Os acessos aos parâmetros passados na linha de comando para o Node é realizado através do process.argv[n]

// b)
console.log("Olá, ", process.argv[2], "! Você tem ", process.argv[3], " anos")

// c)
const idade = Number(process.argv[3])
const novaIdade = idade + 7
console.log("Olá, ", process.argv[2], "! Você tem ", idade, " anos. Em sete anos você terá ", (novaIdade), " anos.")