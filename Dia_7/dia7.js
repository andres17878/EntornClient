function taula() {
    let a = parseInt(prompt("Nombre de files"));
    let b = parseInt(prompt("Nombre de columnes"));

    let t = document.createElement("table");
    t.style.border = "1px solid black";


    for(let i = 0; i < a; i++) {

        let tr = document.createElement("tr");

        for(let j = 0; j < b; j++) {
            let td = document.createElement("td");
            let tn = document.createTextNode(`${i}-${j}`);
            td.appendChild(tn);
            td.style.border = "1px solid black";
            tr.appendChild(td);
        }

        t.appendChild(tr);

    }
    
    document.body.appendChild(t);
}


function taulaMultiplicar() {
    let a = parseInt(prompt("Nombre de files"));
    let b = parseInt(prompt("Nombre de columnes"));

    let t = document.createElement("table");
    t.style.border = "1px solid black";


    for(let i = 1; i <= a; i++) {

        let tr = document.createElement("tr");

        for(let j = 1; j <= b; j++) {
            let td = document.createElement("td");
            let tn = document.createTextNode(`${i * j}`);
            td.appendChild(tn);
            td.style.border = "1px solid black";
            tr.appendChild(td);
        }

        t.appendChild(tr);

    }
    
    document.body.appendChild(t);
}


function piramide() {
    
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
    
    document.body.appendChild(t);
}