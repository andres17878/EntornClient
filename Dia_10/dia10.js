function endevina(){
    let a = Math.floor(Math.random() * 100) + 1;

    let intents = 0;

    while (true){
        let b = parseInt(prompt("Introdueix un número:"));

        if(!b){
            console.log("Game over");
            break;
        }

        if (isNaN(b) || b < 0 || b > 100){
            intents++;
            console.log("Invàlid");
            continue;
        }
        

        intents++;

        if (b == a){
            console.log(`Has encertat el número ${a} amb ${intents} intents`);
            break;
        } else if (b < a){
            console.log("El número és més gran");
        } else {
            console.log("El número és més petit");
        }
    }  
}

function anyDimecres(){
    let a = parseInt(prompt("Número desde el 2000 (màxim 2050)"));
    let b = parseInt(prompt(`Número desde ${a} fins al 2050`));

    let anys = [];
    for (let i = a; i <= b; i++){
        if (new Date(i, 0, 1).getDay() == 3){
            anys.push(i);
        }
    }

    console.log(`El primer any que comença a dimecres entre ${a} i ${b} és ${anys[0]}`);
}

function pentavocalica(){
    let a = prompt("Escriu una paraula");
    
    let vocals = [/[aàáä]/gi, /[eèéë]/gi, /[iíìï]/gi, /[oòóö]/gi, /[uùúü]/gi];
    let pentavocalica = true;

    for (let i = 0; i < a.length; i++){
        if (!a.match(vocals[i])){
            pentavocalica = false;
            break;
        }
    }

    if (pentavocalica){
        console.log("És pentavocàlica");
    } else {
        console.log("No és pentavocàlica");
    }

}