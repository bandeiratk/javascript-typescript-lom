// Atribuição via desestruturação de arrays
// const numbers = [1, 'c', 3];
// [a, b, c] = numbers;

// ...rest -> pegar o resto de algo.
// ...spread -> espalhar algo.

// const values = [192, 168, 0, 1, 255, 255, 255, 0];

// const [primeiroValue, secondValue, ...rest] = values;

// console.log(primeiroValue, secondValue);

// DESESTRUTURAÇÃO DE OBJETOS

const person = {
  name: 'João',
  lastName: 'Silva',
  age: 30,
  address: {
    street: 'Av Brasil',
    number: 320,
  },
};

// const { name, age } = person;

// const { name: n = '', age } = person;

const {
  address: { street, number },
} = person;
console.log(street, number);
