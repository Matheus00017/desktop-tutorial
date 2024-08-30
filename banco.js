var saldo = 0
var valorDepositado = parseFloat(prompt("Digite o valor a ser depositado: "));
var saldoFinal = saldo + valorDepositado  ;
var valorSacado = parseFloat(prompt("Digite o valor a ser sacado:  "));
var saque = valorDepositado - valorSacado;

if (saque <= saldoFinal){
    console.log("o valor sacado:" + saque);
}else {
    console.log("o valor não foi possivel ser sacado");
}