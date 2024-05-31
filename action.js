let numberOne=document.getElementById("num1")
let numberTwo=document.getElementById("num2")
let resultado=document.getElementById("resultado")
function sumaDosNumeros(){
    let numOne=parseInt(numberOne.value)
    let numTwo=parseInt(numberTwo.value)
    let suma=numOne+numTwo
    resultado.value=suma

}

function restaDosNumeros(){
    let numOne=parseInt(numberOne.value)
    let numTwo=parseInt(numberTwo.value)
    let resta=numOne-numTwo
    resultado.value=resta
}
function multiplicacionDosNumeros(){
    let numOne=parseInt(numberOne.value)
    let numTwo=parseInt(numberTwo.value)
    let multiplicacion=numOne*numTwo
    resultado.value=multiplicacion
}
function divicionDosNumeros(){
    let numOne=parseInt(numberOne.value)
    let numTwo=parseInt(numberTwo.value)
    let division=numOne/numTwo
    resultado.value=division
}