function data(){
    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth()+1;
    let any = data.getFullYear();
    let diesAnyActual = (data.getTime() - new Date(any, 0, 1).getTime())/ (1000 * 3600 * 24);
    let setmanaActual = Math.ceil(diesAnyActual / 7);


    console.log(`Avui és el dia ${dia} del mes ${mes} de l'any ${any}`);
    console.log(`El nombre de la setma actual és: ${setmanaActual}`);
    console.log(`El percentatge de dies transcorreguts és: ${((diesAnyActual / 365) * 100).toFixed(2)}%`);
    console.log(`El percentatge de dies que falten és: ${((365 - diesAnyActual) / 365 * 100).toFixed(2)}%`);
    console.log(`Ara són les ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`);

    let diaPercent = (data.getHours() * 3600 + data.getMinutes() * 60 + data.getSeconds()) / 864;
    console.log(diaPercent.toFixed(2) + "% del dia ha passat");
    console.log((100-diaPercent).toFixed(2) + "% del dia que queda");

}

function codi(){
    let a = prompt("Introdueix un codi de barres");

    let control = a[a.length-1];

    

    while (a.length < 8) {
        a = "0" + a;
    }

    while (a.length > 8 && a.length < 13) {
        a = "0" + a;
    }

    let suma = 0;

    if(a.length == 8){

        for (let i = a.length-2; i >= 0; i--) {
            if (i % 2 == 0) {
                suma += parseInt(a[i]) * 3;
            } else {
                suma += parseInt(a[i]) * 1;
            }
        }

        let multiplo = Math.ceil(suma / 10) * 10;
        let resultat = multiplo - suma;

        if (resultat - control == 0) {
            console.log("El codi és correcte");
        } else {
            console.log("El codi és incorrecte");
        }

    } else if (a.length == 13) {

        for (let i = 0; i < a.length-1; i++) {
            if (i % 2 == 0) {
                suma += parseInt(a[i]) * 1;
            } else {
                suma += parseInt(a[i]) * 3;
            }
        }

        let multiplo = Math.ceil(suma / 10) * 10;
        let resultat = multiplo - suma;

        if (resultat - control == 0) {
            console.log("El codi és correcte");
        } else {
            console.log("El codi és incorrecte");
        }

    } else {
        console.log("El codi és incorrecte");
    }

    
}