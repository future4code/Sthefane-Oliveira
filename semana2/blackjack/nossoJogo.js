/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
    console.log("Boas vindas ao jogo de Blackjack!")

    

    let jogo = (confirm("Quer iniciar uma rodada?")) 

    if (jogo) {
     
       let cartaUsuario1 = comprarCarta()
       let cartaUsuario2 = comprarCarta()
       let cartaComputador1 = comprarCarta ()
       let cartaComputador2 = comprarCarta ()
       let pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor
       let pontuacaoPc = cartaComputador1.valor + cartaComputador2.valor
       console.log(`Usuario - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - ${pontuacaoUsuario}`)
       console.log(`computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - ${pontuacaoPc}`)
       if (pontuacaoUsuario > pontuacaoPc) {
          console.log ("O usuario ganhou")
       }else if (pontuacaoPc > pontuacaoUsuario){
          console.log("o computador ganhou")
       } else if (pontuacaoUsuario === pontuacaoPc) {
          console.log("Empate")
       }

}else {
   console.log("O jogo acabou")

}
  