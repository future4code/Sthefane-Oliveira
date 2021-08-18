//1) O que o código abaixo está fazendo? Qual o resultado impresso no console? ele esta pegando o i e somando com +1 (limite da soma tem que ser menor que 5). 10 
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//2) a) O que vai ser impresso no console? 19, 21,23,25,27,30
//b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` 
//é suficiente? Se sim, o que poderia ser usado para fazer isso? 

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// 3 3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ? *   ** *** **** 
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }


// escrita 
//1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
//     Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu.
// Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
// c) Por fim, imprima o array com os nomes dos bichinhos no console

// let quantidadeDePet = Number(prompt("quantos animais de estimação você tem?"))
// let i = 0 
// if (quantidadeDePet === 0) {
//     console.log("que pena, você pode adotar")
// }while(i < quantidadeDePet){
//     const nomePet = prompt("Digite o nome do/dos seu/seus pet:")
//     i= i+1
//     console.log(nomePet)
// }

//2. Considere que você tenha acesso a um `array`  (chamado de 'array original')
// que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
// a) Escreva um programa que **imprime** cada um dos valores do array original.
// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma:
// "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// console.log(arrayOriginal)
