// ===== FUNCTION GERADORAS =====
// Função geradora é uma função que pode ser interrompida e retomada em outro momento

function* geradora1() {
  // Código qualquer...
  yield 'Valor 1';
  // Código qualquer...
  yield 'Valor 2';
  // Código qualquer...
  yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next().value);
