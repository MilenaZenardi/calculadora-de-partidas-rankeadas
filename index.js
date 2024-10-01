let jogadores = [
    {player: 1, vitorias: 115, derrotas: 15, ranking: ""},
    {player: 2, vitorias: 50, derrotas: 7, ranking: ""},
    {player: 3, vitorias: 136, derrotas: 20, ranking: ""},
    {player: 4, vitorias: 70, derrotas: 8, ranking: ""},
    {player: 5, vitorias: 95, derrotas: 6, ranking: ""},
]

let saldoVitorias = 0

function calcularSaldo (vitorias, derrotas){
    return vitorias - derrotas
 }

for (let jogador of jogadores){
   saldoVitorias = calcularSaldo(jogador.vitorias, jogador.derrotas)

   if(saldoVitorias <= 10){
    jogador.ranking = "Ferro"
   }
   else if(saldoVitorias > 10 && saldoVitorias <= 20){
    jogador.ranking = "Bronze"
   }
   else if(saldoVitorias > 20 && saldoVitorias <= 50){
    jogador.ranking = "Prata"
   }
   else if(saldoVitorias > 50 && saldoVitorias <= 80){
    jogador.ranking = "Ouro"
   }
   else if(saldoVitorias > 80 && saldoVitorias <= 90){
    jogador.ranking = "Diamante"
   }
   else if(saldoVitorias > 90 && saldoVitorias <= 100){
    jogador.ranking = "Lendário"
   }
   else{
    jogador.ranking = "Imortal"
   }

   console.log(`O Herói ${jogador.player} tem um saldo de ${saldoVitorias} e está no nível ${jogador.ranking}`)
}
