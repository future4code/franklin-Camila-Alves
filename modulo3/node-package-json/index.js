// EXERCÍCIO 1

// a) Os acessos aos parâmetros passados na linha de comando para o Node é realizado através do process.argv[n]

// b)
//console.log("Olá, ", process.argv[2], "! Você tem ", process.argv[3], " anos")

// c)
// const idade = Number(process.argv[3])
// const novaIdade = idade + 7

// console.log("Olá, ", process.argv[2], "! Você tem ", idade, " anos. Em sete anos você terá ", (novaIdade), " anos.")

// EXERCÍCIO 2
// const operacao = process.argv[2]
// const number1 = Number(process.argv[3])
// const number2 = Number(process.argv[4])

// switch(operacao) {
//     case 'add':
//         console.log('A soma dos dois números é', number1 + number2);
//         break;
//     case 'sub':
//         console.log('A subtração dos dois números é', number1 - number2);
//         break;
//     case 'mult':
//         console.log('A multiplicação dos dois números é', number1 * number2);
//         break;
//     case 'div':
//         console.log('A divisão dos dois números é', number1 / number2);
//         break;
// }

// EXERCÍCIO 3
// const tarefas = ['tarefa1', 'tarefa2', 'tarefa3', 'tarefa4']
// tarefas.push(process.argv[2])

// console.log(tarefas)