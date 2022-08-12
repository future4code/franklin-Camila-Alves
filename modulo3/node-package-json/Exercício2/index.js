// EXERCÍCIO 2
const operacao = process.argv[2]
const number1 = Number(process.argv[3])
const number2 = Number(process.argv[4])

switch(operacao) {
    case 'add':
        console.log('A soma dos dois números é', number1 + number2);
        break;
    case 'sub':
        console.log('A subtração dos dois números é', number1 - number2);
        break;
    case 'mult':
        console.log('A multiplicação dos dois números é', number1 * number2);
        break;
    case 'div':
        console.log('A divisão dos dois números é', number1 / number2);
        break;
}
