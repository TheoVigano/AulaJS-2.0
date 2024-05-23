var atleta, idade, categoria;
atleta = (prompt(`Insira o nome do(a) atleta:`));
idade = parseFloat(prompt(`Insira a idade do(a) atleta:`));
if(idade>=5 && idade<=7){
    categoria = "Infantil A"
}else if (idade>=8 && idade<=10){
    categoria = "Infantil B"
}else if (idade>=11 && idade<=13){
    categoria = "Juvenil A"
}else if (idade>=14 && idade<=17){
    categoria = "Juvenil B"
}else{
    categoria = "Adulto"
}
alert (`O(a) atleta ${atleta} tem ${idade} anos e sua categria é ${categoria}`);