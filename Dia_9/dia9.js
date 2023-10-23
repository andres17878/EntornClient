function frases(){
    let a = prompt("Introduce una frase");
    let b = prompt("Introduce otra frase");
    if(a.length == b.length){
        console.log("Las frases tienen la misma longitud");
    } else if(a.length > b.length){
        console.log("La primera frase es más larga");
    } else {
        console.log("La segunda frase es más larga");
    }
}

function fraseLetra(){
    let a = prompt("Introduce una frase");
    let b = prompt("Introduce una letra");

    let contador = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] == b){
            contador++;
        }
    }

    if(contador >= 2 && contador <=4){
        console.log(`La letra ${b} está en la frase entre 2 y 4 veces: ${contador}`);
    } else {
        console.log(`La letra ${b} está en la frase menos de 2 o más de 4 veces: ${contador}`);
    }
    
}

function fraseNumero(){
    let a = prompt("Introduce una frase");
    let b = parseInt(prompt("Introduce un número"));

    let text = "";
    for(let i = 0; i < a.length; i++){
        if(i != b){
            text += a[i];
        }
    }
    document.write(`El texto ${a} sin la letra en la posición ${b} es el siguiente: ${text}`);
}

function textMostra() {
    let a = prompt("Introdueix un text");

    document.write(`Mayusculas: ${a.toUpperCase()}`);
    document.write(`<br> Minusculas: ${a.toLowerCase()}`);
    document.write(`<br> Longitud: ${a.length}`);
    document.write(`<br> Número de palabras: ${a.split(" ").length}`);
    document.write(`<br> Lista de vocales: ${a.match(/[aeiouàèìòùáéíóúäëïöü]/gi)}`);
    document.write(`<br> Número de vocales: ${a.match(/[aeiouàèìòùáéíóúäëïöü]/gi).length}`);
    document.write(`<br> Texto reduciendose: `);
    
    b = 0;

    for(let i = 0; i < a.length; i++) {
        document.write(`<br> ${a.substring(b, a.length)}`);
        b++;
    }

}

function mostraHora(){
    let a = prompt("Introduce una hora");

    // Fin de año
    let fin = new Date();
    fin.setHours(0);
    fin.setMinutes(0);
    fin.setSeconds(0);
    
    // Hora del usuario
    let b = new Date();
    let hora = a.split(':');
    let horaActual = parseInt(hora[0]);
    let minutsActuals = parseInt(hora[1]);
    b.setHours(horaActual);
    b.setMinutes(minutsActuals);
    b.setSeconds(0);

    // Diferencia de horas
    let msTotals = fin.getTime() - b.getTime();

    segonsTotals = msTotals / 1000;

    let minutsTotals = segonsTotals/60;

    console.log(minutsTotals);
    

    

}

