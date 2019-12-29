"use strict";

$('#peso').keyup(function (e) {
    pegarDados();
});

$('#altura').keyup(function (e) {
    pegarDados();
});

function pegarDados() {
    var pesoUsuario = $('#peso').val();
    var alturaUsuario = $('#altura').val();
    if (pesoUsuario && alturaUsuario) {
        var peso = parseFloat(pesoUsuario);
        var altura = parseFloat(alturaUsuario);
        var imc = calcularImc(peso, altura);
        $('#imc').text(imc.toFixed(2));
        setarEstadoIMC(imc);
    }
}

function calcularImc(peso, altura) {
    if (!peso || !altura) {
        return 0;
    }
    return peso / (altura * altura);
}

function setarEstadoIMC(imc) {
    $('#imc').removeClass();
    $('#imc').addClass('campo-imc');

    var classificacaoPeso = ''
    var imc = Math.round(imc * 100) / 100;
    if (imc < 18.5) {
        classificacaoPeso = 'Baixo Peso';
        $('#imc').addClass('esta-ruim');
    } else if (imc >= 18.5 && imc < 25) {
        classificacaoPeso = 'Peso Ideal';
        $('#imc').addClass('esta-bom');
    } else if (imc >= 25 && imc < 30) {
        classificacaoPeso = 'Sobrepeso';
        $('#imc').addClass('esta-preocupante');
    } else if (imc >= 30 && imc < 35) {
        classificacaoPeso = 'Obesidade grau 1';
        $('#imc').addClass('esta-ruim');
    } else if (imc >= 35 && imc < 40) {
        classificacaoPeso = 'Obesidade grau 2';
        $('#imc').addClass('esta-ruim');
    } else if (imc > 40) {
        classificacaoPeso = 'Obesidade grau 3';
        $('#imc').addClass('esta-ruim');
    } else {
        classificacaoPeso = 'não encontrado';
    }

    $('#nivelPeso').text(classificacaoPeso);
}