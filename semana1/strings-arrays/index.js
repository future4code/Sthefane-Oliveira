// let array
// console.log('a. ', array)   a. array

// array = null
// console.log('b. ', array)  b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)   c. 11

// let i = 0
// console.log('d. ', array[i])   d. 3

// array[i+1] = 19
// console.log('e. ', array)  e. 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13

// const valor = array[i+6]
// console.log('f. ', valor)  f. 9



// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//SUBI NUM ÔNIBUS EM MIRROCOS 27


// ---------------Pratica 1 

// const email = prompt ("digite seu e-mail:")
// const nome = prompt ("digite seu numero de usuario:")

// console.log("seu email:", email, "foi cadastrado seja bem vindo", nome)



// -----------------2
// const comida = ['churrasco', 'sashimi', 'jhou', 'bolo', 'pizza']
// console.log(comida)
// console.log("essas são minhas comidas favoritas")
// console.log(comida [0])
// console.log(comida [1])
// console.log(comida [2])
// console.log(comida [3])
// console.log(comida [4])


// -------------3 
let array = []
const listaDeTarefas = array
const tarefa1 = prompt("digite a primeira tarefa:")
const tarefa2 = prompt("digite a segunda tarefa:")
const tarefa3 = prompt("digite a terceira tarefa:")
array.push(tarefa1, tarefa2, tarefa3)
console.log(array)
let feito = Number(prompt( "digite o numero referente a tarefa feita, de 0 a 2"))
array.splice(feito,1)
console.log(array)