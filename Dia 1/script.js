function alerta() {
    alert("Hola Mundo");
}

function alertaHover() {
    alert("Hola mundo haciendo hover");
}

function alertaDrag() {
    alert("Hola mundo haciendo drag");
}

function alertaChange() {
    alert(document.getElementById('input01').value);
}

function consoleTabla() {
    for(let i = 0; i < 11; i++) {
        console.log(document.getElementById('tabla').value*i)
    }
}

