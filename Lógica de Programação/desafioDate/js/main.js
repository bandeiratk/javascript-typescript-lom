const body = document.querySelector('.container');

function createHeading() {
  return (h1 = document.createElement('h1'));
}

function setHour() {
  const daysOfWeek = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];

  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const day = daysOfWeek[new Date().getDay()];
  const dayOfMonth = new Date().getDate();
  const month = months[new Date().getMonth()];
  const year = new Date().getFullYear();
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();

  const h1 = createHeading();

  h1.innerText = `${day}, ${dayOfMonth} de ${month} de ${year}
  
                  ${hour}:${minutes}`;

  body.appendChild(h1);
}

setHour();
