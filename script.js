const opciones = ['rock', 'paper', 'scisors'];
let puntJugador = 0;
let puntMaquina = 0;
let opJugador;


function jugarRonda()
{
    let ganador = "";
    let opMaquina = opciones[Math.floor(Math.random() * opciones.length)];
    if(opJugador === opciones[0] && opMaquina === opciones[2])
        {
            console.log("You win. Rock beats Scissors!");
            ganador = "jugador";
        }
        else if(opJugador === opciones[2] && opMaquina === opciones[0])
        {
            console.log("You lose. Rock beats Scissors!");
            ganador = "maquina";
        }
        else if(opJugador === opciones[1] && opMaquina === opciones[0])
        {
            console.log("You win. Paper beats Rock!");
            ganador = "jugador";
        }
        else if(opJugador === opciones[0] && opMaquina === opciones[1])
        {
            console.log("You lose. Paper beats Rock!");
            ganador = "maquina";
        }
        else if(opJugador === opciones[2] && opMaquina === opciones[1])
        {
            console.log("You win. Scissors beat Paper!");
            ganador = "jugador";
        }
        else if(opJugador === opciones[1] && opMaquina === opciones[2])
        {
            console.log("You lose. Scissors beat Paper!");
            ganador = "maquina";
        }
        return ganador;
}

let btnPapel = document.querySelector("#papel");
btnPapel.addEventListener("click", function()
{
    opJugador = opciones[1];
    jugarRonda();
}); 


let btnPiedra = document.querySelector("#piedra");
btnPiedra.addEventListener("click", function()
{
    opJugador = opciones[0];
    jugarRonda();
});

let btnTijera = document.querySelector("#tijera");
btnTijera.addEventListener("click", function()
{
    opJugador = opciones[2];
    jugarRonda();
});

function jugar(rondas)
{
    let ronda;
    
    ronda = jugarRonda();
    if(ronda === "jugador")
    {
        puntJugador++;
    }
    else if(ronda === "maquina")
    {
        puntMaquina++;
    }

    if(puntJugador > puntMaquina)
    {
        console.log(`You have won ${puntJugador} to ${puntMaquina}!`);
    }
    else if(puntJugador < puntMaquina)
    {
        console.log(`We are sorry. You have lost ${puntMaquina} to ${puntJugador}`);
    }
    else
    {
        console.log("Oh! Oh! It is a draw!");
    }
}

//jugar(1);

//Mirar por que el btn no esta haciendo la función al hacer click
 

