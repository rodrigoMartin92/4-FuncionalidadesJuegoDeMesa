var dado1Atk = 0
var dado2Atk = 0
var dado3Atk = 0
var dado1Def = 0
var dado2Def = 0
var dado3Def = 0
const Ataque = "Ataque"
const Defensa = "Defensa"
var ganadorDado1
var ganadorDado2
var ganadorDado3
var CantidadDeAtaques = 0
var CantidadDeDefensas = 0

function lanzarDadoAtaque() {
    var dadosAtacantes = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1
    ];
    /* ORDENAR ARREGLO EN JS */
    dadosAtacantes.sort(function (a, b) { return b - a })
    dado1Atk = dadosAtacantes[0];
    dado2Atk = dadosAtacantes[1];
    dado3Atk = dadosAtacantes[2];
    document.getElementById("idDado1").innerHTML = dado1Atk;
    document.getElementById("idDado2").innerHTML = dado2Atk;
    document.getElementById("idDado3").innerHTML = dado3Atk;
}

function lanzarDadoDefensa() {
    var dadosDefendientes = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1
    ];
    /* ORDENAR ARREGLO EN JS */
    dadosDefendientes.sort(function (a, b) { return b - a })
    dado1Def = dadosDefendientes[0];
    dado2Def = dadosDefendientes[1];
    dado3Def = dadosDefendientes[2];

    document.getElementById("idDado4").innerHTML = dado1Def;
    document.getElementById("idDado5").innerHTML = dado2Def;
    document.getElementById("idDado6").innerHTML = dado3Def;
}

function compararDados() {
    if (dado1Atk > dado1Def) {
        ganadorDado1 = Ataque;
    }
    else {
        ganadorDado1 = Defensa;
    }
    if (dado2Atk > dado2Def) {
        ganadorDado2 = Ataque;
    }
    else {
        ganadorDado2 = Defensa;
    }
    if (dado3Atk > dado3Def) {
        ganadorDado3 = Ataque;
    }
    else {
        ganadorDado3 = Defensa;
    }
    document.getElementById("idGanador1").innerHTML = ganadorDado1;
    document.getElementById("idGanador2").innerHTML = ganadorDado2;
    document.getElementById("idGanador3").innerHTML = ganadorDado3;
}

function sumatoriaDeComparaciones() {
    console.log("ganadorDado1 = " + ganadorDado1 + " - ganadorDado2 = " + ganadorDado2 + " - ganadorDado3 = " + ganadorDado3)
    if (ganadorDado1 === Ataque) {
        CantidadDeAtaques++;
    } else {
        CantidadDeDefensas++;
    }
    if (ganadorDado2 === Ataque) {
        CantidadDeAtaques++;
    } else {
        CantidadDeDefensas++;
    }
    if (ganadorDado3 === Ataque) {
        CantidadDeDefensas++;
    } else {
        CantidadDeDefensas++;
    }
    
    console.log("CantidadDeAtaques = " + CantidadDeAtaques + " - CantidadDeDefensas = " + CantidadDeDefensas+" - Porcentaje de defensas = "+((CantidadDeDefensas*100/(CantidadDeAtaques+CantidadDeDefensas))))
}

function tiroCompletoYSumatoria() {
    lanzarDadoAtaque();
    lanzarDadoDefensa();
    compararDados();
    sumatoriaDeComparaciones();
}