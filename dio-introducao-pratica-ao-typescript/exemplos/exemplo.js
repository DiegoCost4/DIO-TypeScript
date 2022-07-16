"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function adcionarNumeros(numero1, numero2, devPrintar, frase) {
    let resultado = numero1 + numero2;
    if (devPrintar) {
        console.log(frase + resultado);
    }
    return resultado;
}
let devPrintar = true;
let frase = 'O valor é: ';
if (button) {
    button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
        if (input1 && input2)
            console.log(adcionarNumeros(Number(input1.value), Number(input2.value), devPrintar, frase));
    });
}