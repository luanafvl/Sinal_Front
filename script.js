const vermelho = document.getElementById("vermelho");
const amarelo = document.getElementById("amarelo");
const verde = document.getElementById("verde");


function setRed(){
    vermelho.style.backgroundColor = "red";
    amarelo.style.backgroundColor = "black";
    verde.style.backgroundColor = "black";

}

function setYellow(){
    vermelho.style.backgroundColor = "black";
    amarelo.style.backgroundColor = "yellow";
    verde.style.backgroundColor = "black";
}

function setGreen(){
    vermelho.style.backgroundColor = "black";
    amarelo.style.backgroundColor = "black";
    verde.style.backgroundColor = "green";
}

function start(){
    setTimeout(() => {
        setRed()
    }, 0)
    setTimeout(() => {
        setYellow()
    }, 2000);
    setTimeout(() => {
        setGreen()
    }, 4000)
}
    
start();

setInterval(() => {
    start();
}, 8000);

