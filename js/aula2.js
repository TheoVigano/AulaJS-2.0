var precoGasolina, valorPago, litros;
precoGasolina = 5.86;
valorPago = parseFloat(prompt("Quantos reais vai aí meu xiru?: "));
litros = valorPago/precoGasolina;

alert(`Você abasteceu ${litros.toFixed(1)} litros.
`);