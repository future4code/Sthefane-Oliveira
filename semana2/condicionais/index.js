// 1 ) 
// a) Explique o que o código faz. Qual o teste que ele realiza? ele ve se o numero é par
// b) Para que tipos de números ele imprime no console "Passou no teste"? numeros pares
// c) Para que tipos de números a mensagem é "Não passou no teste"? numeros impares

// 2)
// a) Para que serve o código acima? para retornar o valor das frutas

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? 2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console
// se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? 5

// 3)
// a) O que a primeira linha está fazendo? Pedindo por meio de prompt para digitar um numero 

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? Esse numero passou no teste. Deu erro.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. Sim. ele só retorna maior que 0 

// ----------------------

// 1)
// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir.
// Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`



// let idade = Number(prompt("Digite sua idade:")) >=18
// if (idade){
//     console.log("voce tem idade para dirigir")
// }else{
//     console.log("voce nao tem idade para dirigir")
// }


// 2) 
//Agora faça um programa que verifica que turno do dia um aluno estuda. 
//Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
//Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
// const turno = (prompt("digite seu turno: M(matutino) V (Vespertino) ou N(noturno)")).toLocaleLowerCase()
// switch (turno) {
//     case "m" :
//     console.log("Bom dia")
//     break
//     case "v" :
//     console.log("Boa tarde ")
//     break
//     case "n" :
//     console.log("boa  noite")
//     break
//     default:
//         console.log("digite um turno valido")
            
// }


