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
    const control = parseInt(a.length-1);

    while (a.length < 8) {
        a = "0" + a;
    }

    while (a.length > 8 && a.length < 13) {
        a = "0" + a;
    }
    
    let suma = 0;
    console.log(a);

    
    for(let i = a.length-2; i >= 0; i--) {
        let b;
        if(i % 2){
            b = parseInt(a[i]) * 3;
            suma = suma+b;
        } else {
            b = parseInt(a[i]) * 1;
            suma = suma+b;
        }

        


    }

    console.log(suma);
    console.log(control);
    
        


    
}