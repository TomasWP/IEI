var s = "3"
var x = 3
var s = 3
document.write(s+1)
document.write(x+1)
document.write("<br/>")
var n=2
for(var i=0;i<16;i++){
    document.write(n - 2)
    var n=n+1
    document.write("<br/>")  
}
document.write("Batman")
document.write("<br/>")

function soma(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function mul(a,b){
    return a*b
}

function div(a,b){
    return a/b
}
document.write(1 - "Soma")
document.write("<br/>")
document.write(2 - "Subtração")
document.write("<br/>")
document.write(3 - "Multiplicação")
document.write("<br/>")
document.write(4 - "Divisão")
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")

var p=prompt("Qual operação deseja realizar?")
if (p==1){
    var a= prompt("Insira o 1º valor!")
    var b= prompt("Insira o 2º valor!")
    document.write("O resultado da soma é: "+soma(a,b))
}
else if (p==2){
    var a= prompt("Insira o 1º valor!")
    var b= prompt("Insira o 2º valor!")
    document.write("O resultado da subtração é: "+sub(a,b))
}
else if (p==3){
    var a= prompt("Insira o 1º valor!")
    var b= prompt("Insira o 2º valor!")
    document.write("O resultado da multiplicação é: "+mul(a,b))
}
else if (p==4){
    var a= prompt("Insira o 1º valor!")
    var b= prompt("Insira o 2º valor!")
    document.write("O resultado da soma é: "+div(a,b))
}
else{
    document.write("O número inserido não se encontra no indice!")
}