
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 2));

// // b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
//     //  Sua lógica aqui
// }

// // c-)Faça uma função chamada "verificaSeEMaior"

// console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'=  true
// c-) 'a'==='b'= true
// d-) 'b'>'a'= false
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

// Escreva uma função que receba do usuário **nomeDoUsario**, **anoDeNascimento**, **senhaDoUsuario** e **nacionalidade**
//  e ****guarde essas informações dentro de um array `usuarios`. Porém só poderão se cadastrar:
// - Usuários maiores de 18 anos
// - A senha deve ter no mínimo 6 caracteres
// - E que a nacionalidade seja brasileira.

//     const cadastro = (nome, ano, senha, nacional) => {
//         //isso é uma function
//     const usuario = [];
//     let idade = 2021 - anoDeNascimento 
//     usuario.push(nome, ano, senha, nacional)
//         //  Sua lógica aqui 


//     if(idade < 18){
//         console.log("idade insuficiente")
//     } else if  (usuario[2].length <= 6){
//         console.log("senha menor do que foi pedido")

//     } else if  ( nacionalidade === "n"){
//         console.log("voce nao pode cadastrar por nao ser brasileiro")

//     }else{
//         console.log("cadastrado")
//     }

//     }
    
// const nomeUsuario = prompt("digite o nome de usuario")
// let anoDeNascimento = Number(prompt("Qual o seu ano de nascimento?"))
// const senhaDoUsuario = prompt("digite sua senha (minimo 6 digitos)")
// const nacionalidade = prompt("Você é brasileiro? s/n")
// console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

// const login = () => {
//     const login = "labenu"
//     //  Sua lógica aqui
//     const senhaUsuario = prompt("digite uma senha")
//     if (login === senhaUsuario){
//         console.log("usario logado")
//     } else {
//         console.log("senha invalida")
//     }

// }


// console.log(login());

// // Exercício 5----------------------------------------------------------------------------------------------------

// const primeiraDose = () => {

//     //  Sua lógica aqui
//    const nome = prompt("digite seu nome")
//    const vacina = prompt("digite a vacina que tomou")
   
//    if (vacina === "coronavac"){
//       tempo = 28 
//       data = "28/09/2021"
//    }
//    if (vacina === "astrazenica"){
//        tempo = 90
//        data = "1/12/2021"

// }
// if (vacina === "pfizer"){
//     tempo = 90
//     data = "1/12/2021"
// }
// return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`


// }
// console.log(primeiraDose())


// // LOOP+CONDICIONAL

// // Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui
//    let pessoa = usuarios.filter((usuario) => {
//        if (usuario.imunizacao === "incompleta"){
//            usuario.imunizacao === "completo"
//            return usuario

//        }

//    })

// }
// console.log(segundaDose("Barbara"));

// // Exercício 7 --------------------------------------------------------------------------------------

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui
//     const pessoaImunizada = usuarios.filter((usuario)=> {
//         if(usuario.imunizacao === "inconpleta"){
//             return usuario
//         }

//     })

//     const listapessoasImunizadas = pessoaImunizada.map((pessoa) => {
//     console.log(`Olá ${pessoa.nome}! Sua imunização está ${pessoa.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
// })
// return avisoAosAtrasados

// }
// console.log(avisoAosAtrasados());


// // DESAFIO------------------------------------------------------------------------------------------

// const usuarios = [
//     {
//         nome: "Artur",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "pfizer",
//         imunizacao: "incompleta"
//     },
//     {
//         nome: "Bárbara",
//         ano: 1984,
//         nacionalidae: "brasileira",
//         senha: "labenu",
//         vacina: "astrazenica",
//         imunizacao: "completa"
//     },
//     {
//         nome: "Carlos",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "coronavac",
//         imunizacao: "incompleta"
//     }

// ]

// const cadastro = () => {
//     //  Sua lógica aqui
// }
// console.log(cadastro());

// const login = () => {
//     //  Sua lógica aqui
// }
// console.log(login());

// const primeiraDose = () => {
// //  Sua lógica aqui
// }
// console.log(primeiraDose())
// const segundaDose = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDose("ALGUM NOME AQUI"));

// const avisoAosAtrasados = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasados());