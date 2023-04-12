// IEEE 754-2008

let num1 = 0.7;
let num2 = 0.1;

// num1 += num2; // 0.9 ||
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2

// num1 = ((num1 * 100) + (num2 * 100))  / 100; 

num1 = parseFloat(num1.toFixed(2)); // || num1 = Number(num1.toFixed(2));

console.log(num1)
// console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2);
// console.log(num1.toString(16)); Dependendo do número, ele converte para hexadecimal ou outra base numérica
// console.log(Number.isInteger(num1)); // Verifica se é um número inteiro

let TEMP = num1 * 'Olá';
// console.log(Number.isNaN(TEMP)); // Verifica se é um número

