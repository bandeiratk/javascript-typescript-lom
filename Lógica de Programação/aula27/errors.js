// function sum(a, b) {
//   if (typeof a !== 'number') {
//     throw new TypeError('O primeiro parâmetro não é um número válido!');
//   }
//   if (typeof b !== 'number') {
//     throw new TypeError('O segundo parâmetro não é um número válido!');
//   }

//   return a + b;
// }

// try {
//   console.log(sum(4, 5));
//   console.log(sum(0, '0'));
// } catch (error) {
//   console.log(error);
//   console.log('Os valores enviados pelo usuários não são válidos');
// }

// try, catch, finally

function getHour(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
  });
}

try {
  setInterval(() => {
    console.log(getHour());
  }, 2000);
} catch (error) {
  if (error instanceof TypeError) {
    console.log('Data informada é inválida!');
  } else {
    console.log(error);
    console.log('Um erro inesperado ocorreu!');
  }
}
