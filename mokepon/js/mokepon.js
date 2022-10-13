let ataqueEnemigo
let ataqueJugador
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')    
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const botonAgua = document.getElementById('boton-agua')
const botonFuego = document.getElementById('boton-fuego')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById("boton-reiniciar")
const botonTierra = document.getElementById('boton-tierra')
const inputCapipepo = document.getElementById('capipepo')
const inputHipodogue = document.getElementById('hipodogue')
const inputRatigueya = document.getElementById('ratigueya')
const nuevoAtaqueDelEnemigo = document.createElement('p')     
const nuevoAtaqueDelJugador = document.createElement('p')
const sectionMensajes = document.getElementById('resultado')
const sectionReiniciar = document.getElementById('reiniciar')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo') 
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanVidasEnemigo = document.getElementById("vidas-enemigo")
const spanVidasJugador = document.getElementById("vidas-jugador")
let vidasEnemigo = 3
let vidasJugador = 3

function iniciarJuego()
{    
    sectionReiniciar.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'none' 
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
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
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

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
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo = ataqueEnemigo
 
    sectionMensajes.appendChild(ataquesDelJugador)
    sectionMensajes.appendChild(ataquesDelEnemigo)        
}

function crearMensajeFinal(resultadoFinal)
{
    sectionMensajes.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true    
}


function aleatorio(min, max)
{
    return Math.floor(Math.random() * (max - min + 1 ) + min)
}

window.addEventListener('load', iniciarJuego)