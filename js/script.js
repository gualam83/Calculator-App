const botonnumeros = document.getElementsByName('data-number');
const botonoperaciones = document.getElementsByName('operations');
const botonigual = document.getElementsByName('data-igual')[0];
const botondelete = document.getElementsByName('data-delete')[0];
var resultado = document.getElementById('resultado');
var operaactual = '';
var operaanterior = '';
var operacion = undefined;

botonnumeros.forEach(function(boton) {
    boton.addEventListener('click', function() {
        agregarnumero(boton.innerText);
    })
});

botonoperaciones.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectoperacion(boton.innerText);
    })
});

botonigual.addEventListener('click', function () {
    calcular();
    actualizardisplay();
});

botondelete.addEventListener('click', function () {
    clear();
    actualizardisplay();
});

function selectoperacion(op) {
    if(operaactual === '') return;
    if(operaanterior !== '') {
        calcular()
    }
    operacion = op.toString();
    operaanterior = operaactual
    operaactual = '';
}

function calcular() {
    var calculo;
    const anterior = parseFloat(operaanterior);
    const actual = parseFloat(operaactual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'X':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    operaactual = calculo;
    operacion = undefined;
    operaanterior = '';
}

function agregarnumero(num) {
    operaactual = operaactual.toString() + num.toString();
    actualizardisplay();
}

function clear() {
    operaactual = '';
    operaanterior = '';
    operacion = undefined;
}

function actualizardisplay() {
    resultado.value = operaactual;
}

clear();