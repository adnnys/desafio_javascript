// O objetivo deste desafio é resolvê-lo utilizando o seu conhecimento sobre Arrays, uma estrutura de dados que armazena uma coleção de dados em um bloco de memória. Dado uma array de valores {2, 3, 5, 7, 11, 13, 18, 34}, desenvolva um programa que retorne como resultado apenas os números pares dessa array.

// Entrada
// A entrada consiste em um array de números inteiros positivos.

// Saída
// A saída do desafio equivale aos números pares do Array, como mostra o exemplo a baixo:

// Exemplo 1:

// Entrada 

// 2, 3, 5, 7, 11, 13, 18, 34

// Saída
// 2
// 18
// 34


// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let array = [ 2, 3, 5, 7, 11, 13, 18, 34 ];

//TODO: Implemente um laço de repetição e complemente com uma condição que verifique os Arrays Pares:

const even = array.filter(number => number % 2 == 0);

//TODO: Agora imprima APENAS os números pares 

print(even[0]);
print(even[1]);
print(even[2]);
