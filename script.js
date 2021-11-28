let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular(){
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let carne = carnePP(duracao);

    let qdtTotalCarne = carne * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) /2 * criancas);
    
    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Lata(s) de Cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Garrafa(s) de 2 litros para Bebida </p>`;
}

function carnePP(duracao){
    let carne = 400;
    if(duracao >= 6){
        return 650;
    }
    else
    {
        return 400;
    }
}

function cervejaPP(duracao){
    let carne = 400;
    if(duracao >= 6){
        return 2000;
    }
    else
    {
        return 1200;
    }
}

function bebidasPP(duracao){
    let carne = 400;
    if(duracao >= 6){
        return 1500;
    }
    else
    {
        return 1000;
    }
}