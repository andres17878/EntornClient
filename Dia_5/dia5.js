function temperatura(){
    let x = prompt("Centígrads o Fahrenheit");

    let a = prompt("Introdueix la temperatura");

    // Conversor a Fahrenheit
    let b = ((9.0/5.0) * a) + 32;

    // Conversor a Centígrads
    let c = (a - 32)/(9.0/5.0);

    if (x == "c") {
        console.log(`${a} graus centígrads són ${b} graus fahrenheit`);
    } else if(x == "f") {
        console.log(`${a} graus fahrenheit són ${c} graus centígrads`);
    }

}

function numero() {
    let a = prompt("Introdueix un número per convertir a binari, octal i hexadecimal");

    let b = a;

    let resto = '';

    while(b > 0) {
        resto = b % 2 + resto;
        b = Math.floor(b/2);
    }

    console.log(`El numero ${a} en binari és ${resto}`);

    let c = a;
    let restoOctal = '';

    while(c > 0) {
        restoOctal = c % 8+ restoOctal;
        c = Math.floor(c/8);
    }

    console.log(`El numero ${a} en octal és ${restoOctal}`);

    let d = a;
    let restoHexa = '';

    let arrayHexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


    while(d > 0) {
        restoHexa = arrayHexa[d%16] + restoHexa;

        d = Math.floor(d/16);
    }

    console.log(`El numero ${a} en hexadecimal és ${restoHexa}`);

}
