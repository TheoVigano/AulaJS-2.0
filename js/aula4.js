var modelo, distancia, tempo, velocidadeMedia;
modelo = parseFloat(prompt(`Insira o nome/modelo do carro:`));
distancia = parseFloat(prompt(`Insira a distância percorrida em km:`));
tempo = parseFloat(prompt(`Insira o tempo que levou em horas:`));
velocidadeMedia = distancia/tempo;
alert(`O carro ${modelo} percorreu ${distancia}km em ${tempo} horas e sua velocidade média é ${velocidadeMedia}`);