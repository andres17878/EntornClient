function rombo() {
    
    let b = parseInt(prompt("Nombre de columnes"));
    let a = (b/2)+1;

    let t = document.createElement("table");
    t.style.border = "1px solid black";


    for(let i = 1; i <= a; i++) {

        let tr = document.createElement("tr");

            for(let j = 1; j <= b; j++) {
                let td = document.createElement("td");
                let tn = document.createTextNode(``);
                td.appendChild(tn);
                td.style.width = "20px";
                td.style.height = "20px";

                if(j == (b+1)/2) {
                    td.style.backgroundColor = "red";
                }

                if(j <= ((b+1)/2)+i-1 && j >= ((b+1)/2)-i+1)  {
                    td.style.backgroundColor = "red";
                }


                

                td.style.border = "1px solid black";
                
                
                tr.appendChild(td);
            }

        t.appendChild(tr);

    }

    for(let i = a-1; i >= 1; i--) {

        let tr = document.createElement("tr");

            for(let j = 1; j <= b; j++) {
                let td = document.createElement("td");
                let tn = document.createTextNode(``);
                td.appendChild(tn);
                td.style.width = "20px";
                td.style.height = "20px";

                if(j == (b+1)/2) {
                    td.style.backgroundColor = "red";
                }

                if(j <= ((b+1)/2)+i-1 && j >= ((b+1)/2)-i+1)  {
                    td.style.backgroundColor = "red";
                }        

                td.style.border = "1px solid black";
                
                
                tr.appendChild(td);
            }

        t.appendChild(tr);

    }
    
    document.body.appendChild(t);
}

function extension() {
    let arxiu = prompt("Nombre del archivo");
    let parts = arxiu.split(".");
    if (parts.length > 1) {
        // Si hay al menos un punto en el nombre del archivo
        let extension = parts[parts.length - 1];
        console.log("La extensión del archivo es: " + extension);
    } else {
        // Si no hay ningún punto en el nombre del archivo
        console.log("El archivo no tiene una extensión.");
    }
}

function aIb() {
    let frase = prompt("Introdueix una frase");
    let a = 0;
    let b = 0;

    frase = frase.toLowerCase();

    for(let i = 0; i < frase.length;i++){
        if(frase.charAt(i) == 'a'){
            a++;
        }

        if(frase.charAt(i) == 'b'){
            b++;
        }
    }

    if(a == b) {
        console.log(`Hi han les mateixes a: ${a} i b: ${b}`);
    } else {
        console.log(`No hi han les mateixes a: ${a} i b: ${b}`);
    }
}