var time1, time2, gols1, gols2, resultado;
time1 = (prompt("Digite o nome do time da casa:"));
time2 = (prompt("Digite o nome do time de fora:"));
gols1 = parseFloat(prompt("Digite quantos gols o time de casa fez:"));
gols2 = parseFloat(prompt("Digite quantos gols o time de fora fez:"));
if(gols1>gols2){
    alert(`O time ${time1} ganhou do time ${time2} com o placar de ${gols1}x${gols2}`)
}else if(gols2>gols1){
    alert(`O time ${time2} ganhou do time ${time1} com o placar de ${gols1}x${gols2}`)
}else{
    alert(`O jogo terminou empatado em ${gols1}x${gols2}`)
}
