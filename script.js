const opciones = ['Rock', 'Paper', 'Scissors'];
let puntJugador = 0;
let puntMaquina = 0;
let divBotones = document.querySelector(".botones").getElementsByTagName("*");
let botones = document.querySelectorAll(".boton");
let turno = "";
let usuario = document.querySelector(".usuario");
let computer = document.querySelector(".computer");
let infoRonda = document.querySelector(".infoRonda");
let resTexto = document.querySelector(".resultados");
let resultados;

function opcionMaquina()
{
    let op = Math.floor(Math.random() * opciones.length);
    return opciones[op];
}

function jugarRonda(jugador, maquina)
{
    let ganador; 

    if(jugador === opciones[0] && maquina === opciones[2])
    {
        infoRonda.innerText = "You win. Rock beats Scissors!";
        //console.log("You win. Rock beats Scissors!");
        ganador = "jugador";
    }
    else if(jugador === opciones[2] && maquina === opciones[0])
    {
        infoRonda.innerText = "You lose. Rock beats Scissors!";
        //console.log("You lose. Rock beats Scissors!");
        ganador = "maquina";
    }
    else if(jugador === opciones[1] && maquina === opciones[0])
    {
        infoRonda.innerText = "You win. Paper beats Rock!";
        //console.log("You win. Paper beats Rock!");
        ganador = "jugador";
    }
    else if(jugador === opciones[0] && maquina === opciones[1])
    {
        infoRonda.innerText = "You lose. Paper beats Rock!";
        //console.log("You lose. Paper beats Rock!");
        ganador = "maquina";
    }
    else if(jugador === opciones[2] && maquina === opciones[1])
    {
        infoRonda.innerText = "You win. Scissors beat Paper!";
        //console.log("You win. Scissors beat Paper!");
        ganador = "jugador";
    }
    else if(jugador === opciones[1] && maquina === opciones[2])
    {
        infoRonda.innerText = "You lose. Scissors beat Paper!";
        //console.log("You lose. Scissors beat Paper!");
        ganador = "maquina";
    }
    else
    {
        infoRonda.innerText = "Round repeats. It is a draw!";
        //console.log("Round repeats. It is a draw.");
    }
    return ganador;
}

function extraerResultados(user, computer, numRondas)
{
    let ronda;
 
    ronda = jugarRonda(user, computer);
    if(ronda === "jugador")
    {
        puntJugador++;
    }
    else if(ronda === "maquina")
    {
        puntMaquina++;
    }
    if(puntJugador + puntMaquina == numRondas)
    {
        resTexto.innerText = "";
        if(puntJugador > puntMaquina)
        {
            infoRonda.innerText = `You have won ${puntJugador} to ${puntMaquina}!`
        }
        else if(puntJugador < puntMaquina)
        {
            infoRonda.innerText = `We are sorry. You have lost ${puntMaquina} to ${puntJugador}`;
        }
        else
        {
            infoRonda.innerText = "Oh! Oh! It is a draw!";
        }
    }
    else
    {
        resTexto.innerText = `Player: ${puntJugador} - Computer ${puntMaquina}`
    }
}

botones.forEach(function(btn)
{
    btn.addEventListener("click", function(event)
    {
        turno = event.target.innerText || event.target.parentNode.innerText;
        //event.target.parentNode.classList.add("activo");
        usuario.innerText = turno;
        computer.innerText = opcionMaquina();
        resultados = extraerResultados(usuario.innerText, computer.innerText, 5);
        /* for(let btns of botones)
        {
            btns.disabled = true;
        }
        btn.setAttribute("disabled", true); */
    })
});

