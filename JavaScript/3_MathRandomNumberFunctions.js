//Matemática
// document.write outputs data to the browser
//Ele funciona quinemquigual a python também, podendo concatenar com mais ou separar com virgula, entretanto ao concatenar com + precisamos ter um cuidado
document.write("5 + 4 = ", 5 + 4, "<br/>");

// Using + instead of , will treat everything as a string unless you use ()
document.write("5 + 4 = " + (5 + 4) + "<br/>");

//Contas principais
document.write("5 - 4 = ", 5 - 4, "<br/>");
document.write("5 * 4 = ", 5 * 4, "<br/>");
document.write("5 / 4 = ", 5 / 4, "<br/>");

document.write("5 % 4 = ", 5 % 4, "<br/>");

//Vendo o número máximo possível em uma variável e o mínimo possível
var maxNum = Number.MAX_VALUE;

document.write("Max Num = ", maxNum, "<br/>");
document.write("Min Num = ", Number.MIN_VALUE, "<br/>");

// Numbers have 16 digits of precision, resultados estranhos ao usar uma precisão tão grande em uma linguagem n feita para isso
precisionTest = 0.1000000000000001;
document.write(precisionTest + 0.1000000000000001, "<br/>");

// Por isso arredondamos números, como pode ser visto abaixo, arredondamos apenas a parte decimal com a quantidade de casas decimais a se contar no toFixed(2)
var balance = 1563.87;
document.write("Monthly payment : ", (balance / 12).toFixed(2), "<br />");

var randNum = 5;

// Temos aqui o ++ e --, além de seus irmãozinhos \o/
document.write("randNum++ = ", randNum++, "<br/>");
document.write("++randNum = ", ++randNum, "<br/>");

document.write("randNum-- = ", randNum--, "<br/>");
document.write("--randNum = ", --randNum, "<br/>");

document.write("randNum += 5 = ", randNum += 5, "<br/>");
document.write("randNum -= 5 = ", randNum -= 5, "<br/>");
document.write("randNum *= 5 = ", randNum *= 5, "<br/>");
document.write("randNum /= 5 = ", randNum /= 5, "<br/>");

// Order of operations
document.write("3 + 2 * 5 = ", 3 + 2 * 5, "<br/>");
document.write("(3 + 2) * 5 = ", (3 + 2) * 5, "<br/>");

// Temos essa salada toda de métodos do Javascript dentro de Math
document.write("Math.E = ", Math.E, "<br/>");
document.write("Math.PI = ", Math.PI, "<br/>");

document.write("Math.abs(-8) = ", Math.abs(-8), "<br/>"); 
document.write("Math.cbrt(1000) = ", Math.cbrt(1000), "<br/>"); //Raiz cúbica
document.write("Math.ceil(6.45) = ", Math.ceil(6.45), "<br/>"); //Arredonda o inteiro para cima
document.write("Math.floor(6.45) = ", Math.floor(6.45), "<br/>"); //Arredondamento teto
document.write("Math.round(6.45) = ", Math.round(6.45), "<br/>"); //Arredondamento piso
document.write("Math.log(10) = ", Math.log(10), "<br/>"); // Natural log
document.write("Math.log10(10) = ", Math.log10(10), "<br/>"); // Base 10 log
document.write("Math.max(10,5) = ", Math.max(10,5), "<br/>");
document.write("Math.min(10,5) = ", Math.min(10,5), "<br/>");
document.write("Math.pow(4,2) = ", Math.pow(4,2), "<br/>");
document.write("Math.sqrt(1000) = ", Math.sqrt(1000), "<br/>");

//Com o Math também conseguimos valores randômicos, ele retorna valores aleatórios de 0~1
document.write("Random # (1-10) = ", Math.floor((Math.random() * 10) + 1), "<br/>");

// Convert strings to numbers
document.write("Converted String : ", Number("3.14"), "<br />");

document.write("Converted Int : ", parseInt("5"), "<br />");
document.write("Converted Float : ", parseFloat("5.555"), "<br />");