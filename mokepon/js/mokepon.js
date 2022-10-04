let ataqueJugador
let ataqueEnemigo

function iniciarJuego()
{
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function aleatorio(min, max)
{
    return Math.floor(Math.random() * (max - min + 1 ) + min)
}

function seleccionarMascotaJugador()
{
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
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}

function ataqueAgua()
{
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}

function ataqueTierra()
{
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo()
{
    let ataqueeAleatorio = aleatorio(1,3)
    if(ataqueEnemigo == 1){
        ataqueEnemigo = 'Fuego'
    }else if (ataqueeAleatorio == 2){
        ataqueEnemigo = 'Agua'
    }else{
        ataqueEnemigo = 'Tierra'
    }
}

function aleatorio(min, max)
{
    return Math.floor(Math.random() * (max - min + 1 ) + min)
}

window.addEventListener('load', iniciarJuego)