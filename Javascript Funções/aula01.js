// First-Class objects (Objetos de primeira classe) -> Objetos que são tratados como dados
// Function expression

const souUmDado = function () {
  console.log('Sou um dado.');
};

// souUmDado();

function executafuncao(funcao) {
  console.log('Vou executar sua função abaixo:');
  funcao();
}

// executafuncao(souUmDado);

const arrowFunction = () => {
  console.log('Sou uma arrow function');
};

function umaFunction() {
  arguments[4] = 0;
  let variavel = arguments[4];

  // for (argument of arguments) {
  //   variavel += argument;
  // }

  console.log(variavel);
}

// umaFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function objectionFunction({ nome, sobrenome, idade, peso }) {
  console.log(peso);
}

function arrayFunction([valor1, valor2, valor3]) {
  console.log(valor2);
}

function conta(operator, acumulator, ...rest) {
  for (let number of rest) {
    if (operator === '+') acumulator += number;
    if (operator === '-') acumulator -= number;
    if (operator === '*') acumulator *= number;
    if (operator === '/') acumulator /= number;
    return acumulator;
  }
}

// console.log(conta('+', 0, 20, 30, 40, 50));

// arrayFunction(['banana', 'macaco', 'colega']);

// objectionFunction({ nome: 'Luiz', sobrenome: 'Otávio', idade: 25, peso: 80 });

// RETORNO DAS FUNÇÕES

function sum(a, b) {
  // Retorna algo
  // Encerra a função
  return a + b;
}

function speakPhrase(init) {
  function speakFinal(final) {
    return init + ' ' + final;
  }
  return speakFinal;
}

const helloWorld = speakPhrase('Hello');
// console.log(helloWorld('World!'));

// ESCOPO LÉXICO
const name = 'Bandeira';

function speakName() {
  console.log(name);
}

function useSpeakName() {
  const name = 'Neto';
  speakName();
}

// useSpeakName();

// CALLBACK FUNCTION

function intervalRandom(min = 1000, max = 5000) {
  return Math.floor(Math.random() * (max - min) + min);
}

function f1(callback) {
  setTimeout(() => {
    console.log('f1');
    if (callback) callback();
  }, intervalRandom());
}

function f2(callback) {
  setTimeout(() => {
    console.log('f2');
    if (callback) callback();
  }, intervalRandom());
}

function f3(callback) {
  setTimeout(() => {
    console.log('f3');
    if (callback) callback();
  }, intervalRandom());
}

// f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Olá mundo!');
}

// console.log('Primeiro a ser executado!');

// ===== FUNÇÕES IMEDIATAS | IIFE => IMMEDIATELY INVOKED FUNCTION EXPRESSION =====
(() => {
  console.log('Será executado na hora!');
  console.log('Foge do escopo mais abrangente!');
})();
