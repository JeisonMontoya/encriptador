/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

const textArea = document.querySelector(".textArea");
const mensaje = document.querySelector(".mensaje");
const muneco = document.getElementById("muneco");
const copiar = document.getElementById("copiar");
const sinMensaje = document.getElementById("sin-mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    sinMensaje.style.display = "none";
    muneco.style.display = "none";
    copiar.style.display = "block";
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }

    }

    return stringEncriptada;

}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesncriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    stringDesncriptada = stringDesncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesncriptada.includes(matrizCodigo[i][1])) {
            stringDesncriptada = stringDesncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }

    }

    return stringDesncriptada

}

// Funcion Copiar al portapapeles
function copiarAlPortapapeles() {
    var textarea = document.getElementById("mensajeEncriptado");
    textarea.select();
    document.execCommand("copy");

    var boton = document.getElementsByTagName("button")[2];
    boton.innerHTML = "¡Copiado!";

    setTimeout(function() {
        boton.innerHTML = "Copiar";
    }, 2000);

    }