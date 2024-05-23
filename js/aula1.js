let nome, nota1, nota2, media, resposta;
nome = prompt("Digite o seu nome")
nota1 = parseFloat (prompt("Digite a primeira nota: "));
nota2 = parseFloat (prompt("Digite a segunda nota: "));
media = (nota1 + nota2) / 2;

if (media >= 7) {
    resposta = "Aprovado"

} else {
    resposta = "Reprovado"
}
alert(`${nome} sua média é ${media.toFixed(1)} você está ${resposta}`);