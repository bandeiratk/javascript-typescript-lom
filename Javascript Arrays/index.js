// ===== REVISÃO BÁSICA DE ARRAYS =====  //

// const names = new Array('João', 'Maria', 'José', 'Antônio', 'Margarida'); // Array constructor
// delete names[4];
// const names = ['João', 'Maria', 'José', 'Antônio', 'Margarida']; // Array literal
// name.pop();
// const nome = [...names]; // Spread operator (ES6) | Passado por cópia
// const name = names; // Passado por referência

// const nameRemoved = names.pop(); // Remove o último elemento do array e retorna o elemento removido
// const nameNewRemoved = names.slice(0, -2);

// console.log(nameNewRemoved); // Propriedade length do array

// ===== SPLICE =====  //

const names = ['João', 'Maria', 'José', 'Antônio', 'Margarida'];
// names.splice(index, delete, elem1, elem2, elem3);

const removidos = names.splice(3, 2);


Fib (n) {
  if (n==0) {print(n); return 1;}
  if (n==1) {print(n); return 1;}
  x = fib(n-1) + fib (n-2);
  print (x);
  return x;
}