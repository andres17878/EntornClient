function promptPotencia() {

    let a = getA();
    let b = getB();
    console.time();
    let c = Math.pow(a, b);
    console.timeEnd();
    alert(c);

}

function promptPotenciaFor() {
    let a = getAFor();
    let b = getBFor();
    let c = 1;

    console.time();
    for(i= 0; i < b; i++) {
        c = c*a;
    }

    console.timeEnd();
    alert(c);
}

function getA() {
    return document.getElementById("a").value;
}

function getB() {
    return document.getElementById("b").value;
}

function getAFor() {
    return document.getElementById("aF").value;
}

function getBFor() {
    return document.getElementById("bF").value;
}


function promptNumeros() {

    var a = parseInt(prompt("Introdueix un numero"));
    var b = parseInt(prompt("Un altre"));
    var c = parseInt(prompt("Un altre"));

    

    console.log(`Mitjana: ${(a+b+c)/3}`);

    var numeros = [a,b,c];

    numeros = numeros.sort((a, b) => a - b);

    console.log(numeros);

    console.log(`Numero més petit: ${numeros[0]}`);

    console.log(`Mitja: ${numeros[(numeros.length - 1)/2]}`);

    console.log(`Numero més gran: ${numeros[numeros.length - 1]}`);

}