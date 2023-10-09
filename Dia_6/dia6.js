function quant(){
    let a = parseInt(prompt("Quantes hores"));
    let b = parseInt(prompt("Quants minuts"));
    let c = parseInt(prompt("Quants segons"));

    a = a*60;
    c = c/60;

    let d = a+b+c;

    let costTotal = (0.10 + (d*0.05)).toFixed(2);

    console.log(`Cost total ${costTotal} €`)
}

function colorHexa(){
    let a = parseInt(prompt("Introdueix el valor de R(0-255)"));
    let b = parseInt(prompt("Introdueix el valor de G(0-255)"));
    let c = parseInt(prompt("Introdueix el valor de B(0-255)"));

    let e = a.toString(16);
    let f = b.toString(16);
    let g = c.toString(16);

    e = digitsValids(e);
    f = digitsValids(f);
    g = digitsValids(g);

    console.log(`(${a}, ${b}, ${c}): #${e}${f}${g}`);


}

function digitsValids(a){
    if(a.length < 2) {
        a = '0' + a;
    }
    return a;
}

function bitllets() {
    let preu = parseInt(prompt("Preu del producte?"));
    let diners = parseInt(prompt("Diners lliurats?"));
    let canvi = diners - preu;

    let restos = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];
    let sortida = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let temp;
    let temp2;

    for(let i = 0;  i < 15; i++) {

        temp = canvi % restos[i];

        if(temp > 0) {
            sortida[i] = +1;
        }
    }

    for(let i = 0; i < 15; i++) {
        console.log(`Es necessiten ${sortida[i]} de ${restos[i]} `);
    }
}