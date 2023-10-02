function numeros100() {
    let a = prompt("Introdueix un número");
    let b = prompt("Un altre");

    let c = Math.abs(100 - a);

    let d = Math.abs(100 - b);

    if(c > d) {
        console.log(`El numero més a prop de 100 és ${b}`);
    } else if( c == d) {
        console.log(`Estàn a la mateixa distància`);
    } else if(c < d) {
        console.log(`El numero més a prop de 100 és ${a}`);
    }

}

function segonMesTard() {

    let a = parseInt(prompt("Introdueix la hora"));
    
    let b = parseInt(prompt("Introdueix els minuts"));

    let c = parseInt(prompt("Introdueix els segons"));

    var data = new Date();

    data.setHours(a);

    data.setMinutes(b);

    data.setSeconds((c+1));

    let d = data.getHours();

    let e = data.getMinutes();

    let f = data.getSeconds();

    console.log(`Hora ${d}:${e}:${f}`);

}


function dataValida() {

    let a = prompt("Any?");

    let b = prompt("Mes?");

    let c = prompt("Dia");

    var data = new Date(a, b);

    data.setDate(c);

    if((data.getFullYear() == a) && (data.getMonth() == b) && (data.getDate() == c)){
                console.log("Data vàlida");           
    }else {
        console.log("Data no vàlida");
    }

}

function convertirDies() {
    let a = prompt("Introdueix un numero de dies qualsevol");

    let anys;
    let mesos;
    let dies;

    anys = Math.floor(a/360);

    mesos = anys%12;

    dies = a % 30;

    console.log(`${anys} ${mesos} ${dies}`);

}
