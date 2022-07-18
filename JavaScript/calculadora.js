// puxei o botão na visão do javascript
const calcular = document.getElementById('calcule');
// botão reconhecido pelo javaScript

function IMC(){
// puxei o valor do peso na visão do javascript
// puxei o valor do altura na visão do javascript
// puxei o valor do peso na visão do javascript

   const peso = document.getElementById('pes').value;

   const altu = document.getElementById('alt').value;

   const result = document.getElementById('result');
// puxei  a div para o javaScript 

   if ( altu !== '' && peso !== '') {
//fiz uma verificação de espaço em branco
      const valorIMC = (peso / (altu * altu)).toFixed(1);
// calculei o Imc (peso/(altura²) )
// O tofixed tira os numeros apos a virgula por exemplo : 3,14 
// com o tofixedde de(1) vira  3,1. Se apos o numero for + que 5 ele arredonda
      let classificacao = '';
// ver uma variavel mutavel 
      if (valorIMC < 18.5){
          classificacao = 'abaixo do peso.';
      }else if (valorIMC < 25) {
          classificacao = 'com peso ideal. Parabéns!!!';
      }else if (valorIMC < 30){
          classificacao = 'levemente acima do peso.';
      }else if (valorIMC < 35){
          classificacao = 'com obesidade grau I.';
      }else if (valorIMC < 40){
          classificacao = 'com obesidade grau II';
      }else {
          classificacao = 'com obesidade grau III. Cuidado!!';
      }
      result.textContent = `seu IMC é ${valorIMC} e você está ${classificacao}`;
      // text content entra na div com a frase escolhida e com a verificação feita
  }else {
      result.textContent = 'Preencha todos os campos!!!';
  }

   

}

calcular.addEventListener('click',IMC);
// Começar a colocar isso em ves de onclick 