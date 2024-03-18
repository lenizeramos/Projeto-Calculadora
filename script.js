const operadores = ["+", "-", "*", "/"]
var resultado = window.document.querySelector("td#resultado")
var debug = window.document.querySelector("p#debug")
var primeiroNumero = ""
var segundoNumero = ""
var operador = ""
var isOperador = false
var limpaTela = false

function isValid(tecla) {
    if (primeiroNumero == "" && isOperador) {
        return false
    }

    if (isOperador && segundoNumero != "") {
        return false
    }

    return true
}

function clicarTecla(teclaClicada) {
    if (limpaTela) {
        limpar()
    }

    isOperador = operadores.includes(teclaClicada)

    if (isValid(teclaClicada)) {

        if (isOperador) {
            if (operador == "") {
                resultado.innerHTML += teclaClicada
            } else {
                resultado.innerHTML = resultado.innerHTML.replace(operador, teclaClicada)
            }

            operador = teclaClicada

        } else {
            resultado.innerHTML += teclaClicada

            if (operador == "") {
                primeiroNumero += teclaClicada
            }

            if (operador != "") {
                segundoNumero += teclaClicada
            }
        }
    }
    //debugar()
}

function limpar() {
    resultado.innerHTML = ""
    primeiroNumero = ""
    segundoNumero = ""
    operador = ""
    isOperador = false
    limpaTela = false
    //debugar()
}

function calcular() {
    resultadoCalculo = 0
    if (resultado.innerHTML.includes("=")) {
        return
    }

    if (segundoNumero != "") {
        limpaTela = true
        switch (operador) {
            case "+":
                resultadoCalculo = Number(primeiroNumero) + Number(segundoNumero)
                break;

            case "-":
                resultadoCalculo = Number(primeiroNumero) - Number(segundoNumero)
                break;

            case "*":
                resultadoCalculo = Number(primeiroNumero) * Number(segundoNumero)
                break;

            case "/":
                if (segundoNumero == "0") {
                    resultado.innerHTML = "Cannot divide by zero"
                    return
                }
                resultadoCalculo = Number(primeiroNumero) / Number(segundoNumero)
                break;
        }
        resultado.innerHTML += `=${resultadoCalculo}`

    }

}

/*
function debugar() {
    debug.innerHTML = `Operador ${operador} <br>`
    debug.innerHTML += `PrimeiroNumero ${primeiroNumero} <br>`
    debug.innerHTML += `SegundoNumero ${segundoNumero} <br>`
    debug.innerHTML += `isOperador ${isOperador} <br>`
}
*/