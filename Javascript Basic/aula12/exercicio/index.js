const name = prompt('Digite o seu nome completo: ');

document.body.innerHTML += `Seu nome é: ${name} <br />`;
document.body.innerHTML += `Seu nome tem letras: ${name.length} <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${name.charAt(1)}  <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? ${name.toLowerCase().indexOf('a')} <br />`;
document.body.innerHTML += `Qual o último índice da letra a no seu nome? ${name.toLowerCase().lastIndexOf('a')}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${name.slice(-1)}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${name.split(' ').join(' ')}<br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${name.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${name.toLowerCase()} <br />`;
