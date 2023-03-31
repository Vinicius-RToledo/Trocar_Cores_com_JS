let b = document.getElementById("botao");
b.addEventListener("click", trocar);

let c = document.getElementById("botao2");
c.addEventListener("click", trocarCor);



let acumulador = 0;

function trocar() {
    acumulador = acumulador + 1;
    let cor = "#000000";
    switch (acumulador) {
        case 1:
            cor = "#ff0000";
            break;
        case 2:
            cor = "#00ff00";
            break;
        case 3:
            cor = "#0000ff";
            break;
    }
    if (acumulador === 3) {
        acumulador = 0;
    }
    document.body.style.backgroundColor = cor;
}

function trocarCor() {
    let aux1;
    let aux2;
    let aux3;

    aux1 = document.getElementById("label1").style.backgroundColor;
    aux2 = document.getElementById("label2").style.backgroundColor;
    aux3 = document.getElementById("label3").style.backgroundColor;

    document.getElementById("label1").style.backgroundColor = aux2;
    document.getElementById("label2").style.backgroundColor = aux3;
    document.getElementById("label3").style.backgroundColor = aux1;
}