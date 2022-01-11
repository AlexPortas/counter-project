let contador = document.querySelector("#counter");
let numeroCont = 0;

document.querySelector(".prevBtn").addEventListener("click", () => {
    numeroCont--;
    cambiarSpamCont();
    cambiarEstilosContador();
});

document.querySelector(".nextBtn").addEventListener("click", () => {
    numeroCont++;
    cambiarSpamCont();
    cambiarEstilosContador();
});

function cambiarSpamCont() {
    contador.textContent = numeroCont;
}

function cambiarEstilosContador() {
    if (numeroCont < 0) {
        contador.style.color = 'red';
    } else if (numeroCont > 0) {
        contador.style.color = 'green';
    } else {
        contador.style.color = '#333333';
    }
}