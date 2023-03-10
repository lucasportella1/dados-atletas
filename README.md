# dados-atletas

## Projeto 2 de certificação DevStart - Trilha 1

### Introdução

Os organizadores da competição realizada durante o projeto anterior gostaram muito da sua solução proposta e do seu perfil de desenvolvimento. Com isso, eles resolveram fazer uma nova encomenda utilizando a linguagem JavaScript, onde você deverá criar um software capaz de receber informações dos atletas e exibir a categoria, IMC, média calculada e demais informações capturadas.

### Especificações

- Você deverá criar uma classe Atleta para concentrar os atributos e métodos dos atletas.

- A classe deverá receber os seguintes atributos:

  * nome
  * idade
  * peso
  * altura
  * notas

- A classe deverá possuir os seguintes métodos:

  * calculaCategoria(), para calcular a categoria do atleta;
  * calculaIMC(), para calcular o IMC do atleta;
  * calculaMediaValida(), para calcular a média válida do atleta.
  * obtemNomeAtleta(), que retorna o nome do atleta
  * obtemIdadeAtleta(), que retorna a idade do atleta
  * obtemPesoAtleta(), que retorna o peso do atleta
  * obtemNotasAtleta(), que retorna as notas do atleta
  * obtemCategoria(), que retorna a categoria do atleta
  * obtemIMC(), que retorna o IMC do atleta
  * obtemMediaValida(), que retorna a média válida do atleta
  * Utilize as seguintes regras:

- Para calcular a categoria

   Infantil: 9 a 11 anos <br> 
   Juvenil: 12 e 13 anos <br> 
   Intermediário: 14 e 15 anos <br> 
   Adulto: 16 a 30 anos <br> 
   Sem categoria: demais idades <br> 

- Para calcular o IMC

  * Fórmula: imc = peso / (altura x altura)

- Para calcular a média válida

  * Método: Utilize o metodologia abordada no Projeto de Certificação 1.

### Exemplo de entrada

> // Declara o atleta <br> 
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

### Exemplo de saída

 > Nome: Cesar Abascal <br> 
   Idade: 30 <br> 
   Peso: 80 <br> 
   Altura: 1.7 <br> 
   Notas: 10,9.34,8.42,10,7.88 <br> 
   Categoria: Adulto <br> 
   IMC: 27.68166089965398 <br> 
   Média válida: 8.766666666666666 <br> 
 
 ### Entrega

- Você deverá criar um repositório na sua conta do GitHub chamado dados-atletas e adicionar na branch main/master um arquivo dados-atletas.js contendo a solução do projeto. Configure o repositório como público e insira o link para ele no campo Link da solução. Lembre-se de adicionar o link completo, começando com https://. Ele será parecido com isto:

  * https://github.com/nomedeusuario/notas-atletas
