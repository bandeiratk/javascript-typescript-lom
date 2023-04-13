// ====== FUNÇÕES FABRICAS ======

function createPerson(name, lastName, height, weight) {
  return {
    name,
    lastName,
    fala: (assunto) => `${name} está ${assunto}.`,
    height: height,
    weight: weight,

    get nomeCompleto() {
      return `${this.name} ${this.lastName}`;
    },

    set nomeCompleto(value) {
      value = value.split(' ');
      this.name = value.shift();
      this.lastName = value.join(' ');
    },

    get imc() {
      const index = this.weight / (this.height * this.height);
      return index.toFixed(2);
    },
  };
}

// const person1 = createPerson('João', 'Silva', 1.8, 80);
// person1.nomeCompleto = 'Maria Oliveira Dantas';

// const person2 = createPerson('Maria', 'Oliveira', 1.6, 42);

// console.log(person1.fala('falando sobre JS'));
// console.log(person1.imc);
// console.log(person1.nomeCompleto);

// console.log(person2.fala('falando sobre TS'));
// console.log(person2.imc);

// ====== FUNÇÕES CONSTRUTORAS ======
// Construtora -> Pessoa (new)

function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

// const p1 = new Person('João', 'Silva');
// const p2 = new Person('Maria', 'Oliveira');

// ===== FUNÇÕES RECURSIVAS =====
function recursiva(max) {
  console.log(max);
  if (max >= 10) return;
  max++;
  recursiva(max);
}

recursiva(0);
