let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego()
{
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max)
{
    return Math.floor(Math.random() * (max - min + 1 ) + min)
}

function seleccionarMascotaJugador()
{

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputHipodogue = document.getElementById('hipodogue')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(inputHipodogue.checked){
        spanMascotaJugador.innerHTML = 'Hipodogue'
    
    }else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    }else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else{
        spanMascotaJugador.innerHTML = 'Selecciona unas mascota'
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo()
{
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo') 
    let mascotaAleatoria = aleatorio(1,3)

    if(mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodogue'
        
    }else if(mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'        
    }else{
        spanMascotaEnemigo.innerHTML = 'Ratigueya'        
    }
}

function ataqueFuego()
{
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua()
{
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra()
{
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo()
{
    let ataqueeAleatorio = aleatorio(1,3)
    if(ataqueEnemigo == 1){
        ataqueEnemigo = 'FUEGO'
    }else if (ataqueeAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    }else{
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}

function combate(){

    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueEnemigo==ataqueJugador){
        crearMensaje("EMPATE")
    }else if((ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') || (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') || (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA')){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    
    revisarVidas()
}

function revisarVidas(){

    let sectionReiniciar = document.getElementById('reiniciar')   
    
    if(vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES. GANASTE")        
        sectionReiniciar.style.display = 'block'
    }else if(vidasJugador == 0){
        crearMensajeFinal("LO SENTIMOS. PERDISTE")
        sectionReiniciar.style.display = 'block'
    }
}

function crearMensaje(resultado)
{
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' ' + resultado
    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal)
{
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true    
}


function aleatorio(min, max)
{
    return Math.floor(Math.random() * (max - min + 1 ) + min)
}

window.addEventListener('load', iniciarJuego)