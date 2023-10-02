function promptTabla() {
    let numero = prompt("Numero del 1 al 10 com a màxim");
    var str = `--- Taula del: ${numero} ---`
    if(numero > 0 && numero < 11) {
        console.log(str);
        for(let i = 1; i < 11; i++) {
            console.log(`${numero} X ${i} = ${numero*i}`);
        }
    } else {
        console.log("Has d'ingresar un número entre el 1 i el 10");
    }
    
}

function fibonacci() {
    let numero = document.getElementById("serie").value;
    let a = 1, b = 0, c;
    if (numero > 0) {
        for(let i = 1; i <= numero; i++) {
            c = a+b;
            console.log(`fibo [${i}] = ${c}`);
            a = b;
            b = c;
        }
    }
}
