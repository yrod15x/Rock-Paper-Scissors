const opciones = ['rock', 'paper', 'scisors']
let puntJugador = 0;
let puntMaquina = 0;

function opcionMaquina()
{
    let op = Math.floor(Math.random() * opciones.length);
    return opciones[op];
}

function opcionJugador()
{
    let op;
    while(true)
    {
        //op = prompt("Type r for Rock - p for Paper, s for Scisors");
        op = op.toLowerCase();
        if(op === 'r' || op === 'p' || op === 's')
        {
            break;
        }
    }
    
    switch (op) {
        case 'r':
            return opciones[0];
            break;
        case 'p':
            return opciones[1];
            break;
        case 's':
            return opciones[2];
            break;
        default:
            return undefined;
            break;
    }
}

function jugarRonda(jugador, maquina)
{
    while(true)
    {
        jugador = opcionJugador();
        maquina = opcionMaquina();
        if(jugador != maquina)
        {
            break;
        }
    }
    
    let ganador;
    
    if(jugador === opciones[0] && maquina === opciones[2])
    {
        console.log("You win. Rock beats Scissors!");
        ganador = "jugador";
    }
    else if(jugador === opciones[2] && maquina === opciones[0])
    {
        console.log("You lose. Rock beats Scissors!");
        ganador = "maquina";
    }
    else if(jugador === opciones[1] && maquina === opciones[0])
    {
        console.log("You win. Paper beats Rock!");
        ganador = "jugador";
    }
    else if(jugador === opciones[0] && maquina === opciones[1])
    {
        console.log("You lose. Paper beats Rock!");
        ganador = "maquina";
    }
    else if(jugador === opciones[2] && maquina === opciones[1])
    {
        console.log("You win. Scissors beat Paper!");
        ganador = "jugador";
    }
    else if(jugador === opciones[1] && maquina === opciones[2])
    {
        console.log("You lose. Scissors beat Paper!");
        ganador = "maquina";
    }
    return ganador;
}

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

//jugar(5);

//Mirar por que el btn no esta haciendo la función al hacer click
let btnPapel = document.querySelector("#papel");
btnPapel.addEventListener("click", ccambiar(btnPapel));

function ccambiar(objeto)
{
    console.log(objeto.innerHTML);
}