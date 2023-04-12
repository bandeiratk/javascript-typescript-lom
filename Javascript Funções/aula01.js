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

console.log(conta('+', 0, 20, 30, 40, 50));

// arrayFunction(['banana', 'macaco', 'colega']);

// objectionFunction({ nome: 'Luiz', sobrenome: 'Otávio', idade: 25, peso: 80 });
