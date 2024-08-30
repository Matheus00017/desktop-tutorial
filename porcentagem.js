//converter o numero inteiro para decimal
//só é possivel achar a % usando numero decimal
//multiplica o valor pela porcentagem para encontrar o resultado

var primeiroNumero = parseInt(prompt("Digite o primeiro Numero"));
var porcentagem = parseFloat(prompt("Digite  porcentagem que deseja encontrar"));
var porcento = porcentagem / 100;

var resultadoFinal = porcento * primeiroNumero;
console.log("a porcentagem é de; " + resultadoFinal);