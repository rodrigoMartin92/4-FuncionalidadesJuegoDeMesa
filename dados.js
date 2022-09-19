var dado1Atk = 0
var dado2Atk = 0
var dado3Atk = 0
var dado1Def = 0
var dado2Def = 0
var dado3Def = 0
console.log("000 - dado1Atk = " + dado1Atk + " - dado2Atk = " + dado2Atk + " - dado3Atk = " + dado3Atk + " - dado1Def = " + dado1Def + " - dado2Def = " + dado2Def + " - dado3Def = " + dado3Def)

function lanzarDadoAtaque() {
    dado1Atk = Math.floor(Math.random() * 6) + 1;
    document.getElementById("idDado1").innerHTML = dado1Atk;
    dado2Atk = Math.floor(Math.random() * 6) + 1;
    document.getElementById("idDado2").innerHTML = dado2Atk;
    dado3Atk = Math.floor(Math.random() * 6) + 1;
    document.getElementById("idDado3").innerHTML = dado3Atk;
    console.log("AAA - dado1Atk = " + dado1Atk + " - dado2Atk = " + dado2Atk + " - dado3Atk = " + dado3Atk + " - dado1Def = " + dado1Def + " - dado2Def = " + dado2Def + " - dado3Def = " + dado3Def)
}
function lanzarDadoDefensa() {
    dado1Def = Math.floor(Math.random() * 6) + 1;
    document.getElementById("idDado4").innerHTML = dado1Def;
    dado2Def = Math.floor(Math.random() * 6) + 1;
    document.getElementById("idDado5").innerHTML = dado2Def;
    dado3Def = Math.floor(Math.random() * 6) + 1;
    document.getElementById("idDado6").innerHTML = dado3Def;
    console.log("BBB - dado1Atk = " + dado1Atk + " - dado2Atk = " + dado2Atk + " - dado3Atk = " + dado3Atk + " - dado1Def = " + dado1Def + " - dado2Def = " + dado2Def + " - dado3Def = " + dado3Def)
}
function compararDados() {
    console.log("CCC - dado1Atk = " + dado1Atk + " - dado2Atk = " + dado2Atk + " - dado3Atk = " + dado3Atk + " - dado1Def = " + dado1Def + " - dado2Def = " + dado2Def + " - dado3Def = " + dado3Def)
    if (dado1Atk > dado1Def) {
        document.getElementById("idGanador1").innerHTML = "Ataque";
    }
    else {
        document.getElementById("idGanador1").innerHTML = "Defensa";
    }
    if (dado2Atk > dado2Def) {
        document.getElementById("idGanador2").innerHTML = "Ataque";
    }
    else {
        document.getElementById("idGanador2").innerHTML = "Defensa";
    }
    if (dado3Atk > dado3Def) {
        document.getElementById("idGanador3").innerHTML = "Ataque";
    }
    else {
        document.getElementById("idGanador3").innerHTML = "Defensa";
    }
}