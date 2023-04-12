// const threeHours = 60 * 60 * 3 * 1000; // 3 hours in milliseconds

// const data = new Date();

// const data = new Date(2023, 2, 15, 21, 14, 27, 60); // a, m, d, h, M, S, MS
const date = new Date('2019-04-20T20:20:59.100');

console.log('Dia', date.getDate());
console.log('Mês', date.getMonth() + 1); // January = 0
console.log('Ano', date.getFullYear());
console.log('Hora', date.getHours());
console.log('Min', date.getMinutes());
console.log('Seg', date.getSeconds());
console.log('ms', date.getMilliseconds());
console.log('Dia semana', date.getDay()); // 0 - Domingo, 6 - Sábado
console.log(date.toString());

// console.log(date.toString());
