var dado1Atk = 0, dado2Atk = 0, dado3Atk = 0, dado4Atk = 0;

var dado1Def = 0, dado2Def = 0, dado3Def = 0, dado4Def = 0;

const Ataque = "Atacante", Defensa = "Defensor";

var ganadorDado1, ganadorDado2, ganadorDado3, ganadorDado4;

var CantidadDeAtaques = 0, CantidadDeDefensas = 0;

function lanzarDadoAtaque() {
    var dadosAtacantes = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1
    ];
    /* ORDENAR ARREGLO EN JS */
    dadosAtacantes.sort(function (a, b) { return b - a })
    dado1Atk = dadosAtacantes[0];
    dado2Atk = dadosAtacantes[1];
    dado3Atk = dadosAtacantes[2];
    dado4Atk = dadosAtacantes[3];

    /*     console.log("dado1Atk = " + dado1Atk + " - dado2Atk = " + dado2Atk + " - dado3Atk = " + dado3Atk + " - dado4Atk = " + dado4Atk) */

    document.getElementById("idDadoA1").innerHTML = dado1Atk;
    document.getElementById("idDadoA2").innerHTML = dado2Atk;
    document.getElementById("idDadoA3").innerHTML = dado3Atk;
    document.getElementById("idDadoA4").innerHTML = dado4Atk;
}

function lanzarDadoDefensa() {
    var dadosDefensors = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1
    ];
    /* ORDENAR ARREGLO EN JS */
    dadosDefensors.sort(function (a, b) { return b - a })
    dado1Def = dadosDefensors[0];
    dado2Def = dadosDefensors[1];
    dado3Def = dadosDefensors[2];
    dado4Def = dadosDefensors[3];

    /*     console.log("dado1Def = " + dado1Def + " - dado2Def = " + dado2Def + " - dado3Def = " + dado3Def + " - dado4Def = " + dado4Def) */

    document.getElementById("idDadoD1").innerHTML = dado1Def;
    document.getElementById("idDadoD2").innerHTML = dado2Def;
    document.getElementById("idDadoD3").innerHTML = dado3Def;
    document.getElementById("idDadoD4").innerHTML = dado4Def;
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
    if (dado4Atk > dado4Def) {
        ganadorDado4 = Ataque;
    }
    else {
        ganadorDado4 = Defensa;
    }
    document.getElementById("idGanador1").innerHTML = ganadorDado1;
    document.getElementById("idGanador2").innerHTML = ganadorDado2;
    document.getElementById("idGanador3").innerHTML = ganadorDado3;
    document.getElementById("idGanador4").innerHTML = ganadorDado4;
    return ganadorDado1, ganadorDado2, ganadorDado3, ganadorDado4;
}

function sumatoriaDeComparaciones() {
    if (ganadorDado1 === "Atacante") {
        CantidadDeAtaques++;
    }
    if (ganadorDado1 === "Defensor") {
        CantidadDeDefensas++;
    }
    if (ganadorDado2 === "Atacante") {
        CantidadDeAtaques++;
    }
    if (ganadorDado2 === "Defensor") {
        CantidadDeDefensas++;
    }
    if (ganadorDado3 === "Atacante") {
        CantidadDeAtaques++;
    }
    if (ganadorDado3 === "Defensor") {
        CantidadDeDefensas++;
    }
    if (ganadorDado4 === "Atacante") {
        CantidadDeAtaques++;
    }
    if (ganadorDado4 === "Defensor") {
        CantidadDeDefensas++;
    }
}

function mostrarDatos() {
    document.getElementById("idResultadoAtaque").innerHTML = CantidadDeAtaques;
    document.getElementById("idResultadoDefensa").innerHTML = CantidadDeDefensas;

    console.log("ganadorDado1 = " + ganadorDado1 + " - ganadorDado2 = " + ganadorDado2 + " - ganadorDado3 = " + ganadorDado3 + " - ganadorDado4 = " + ganadorDado4)

    console.log("CantidadDeAtaques = " + CantidadDeAtaques + " - CantidadDeDefensas = " + CantidadDeDefensas + " - Porcentaje de defensas = " + ((CantidadDeDefensas * 100 / (CantidadDeAtaques + CantidadDeDefensas))))
}
function tiroCompletoYSumatoria() {
    lanzarDadoAtaque();
    lanzarDadoDefensa();
    compararDados();
    sumatoriaDeComparaciones();
    mostrarDatos();
}
