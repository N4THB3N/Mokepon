const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')    
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById("boton-reiniciar")
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const sectionMensajes = document.getElementById('resultado')
const sectionReiniciar = document.getElementById('reiniciar')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo') 
const spanMascotaJugador = document.getElementById('mascota-jugador')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let spanVidasEnemigo = document.getElementById("vidas-enemigo")
let spanVidasJugador = document.getElementById("vidas-jugador")
let vidasEnemigo = 3
let vidasJugador = 3
let opcionDeMokepones
let nuevoAtaqueDelEnemigo = document.createElement('p')     
let nuevoAtaqueDelJugador = document.createElement('p')
let inputCapipepo
let inputHipodogue
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonAgua
let botonFuego
let botonTierra
let mokepones = []
let ataqueEnemigo = []
let ataqueJugador = []
let botones = []


class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodogue = new Mokepon('Hipodogue', './assets/mokepons_mokepon_hipodoge_attack.png', 3)
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 3)
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 3)

hipodogue.ataques.push(
    {nombre: '💦', id: 'boton-agua'},
    {nombre: '💦', id: 'boton-agua'},
    {nombre: '💦', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'}
)

capipepo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},    
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},     
    {nombre: '💦', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
)

ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},    
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},        
    {nombre: '💦', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'}
)

mokepones.push(hipodogue, ratigueya, capipepo)

function iniciarJuego()
{    
    sectionReiniciar.style.display = 'none'
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />                
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>                    
        </label>        
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones
        
        inputHipodogue = document.getElementById("Hipodogue")
        inputCapipepo = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")                
    })
    sectionSeleccionarAtaque.style.display = 'none' 
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
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
        spanMascotaJugador.innerHTML = inputHipodogue.id
        mascotaJugador = inputHipodogue.id
    }else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    }else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    }else{
        spanMascotaJugador.innerHTML = 'Selecciona unas mascota'
    }

    extraerAtaques(mascotaJugador)    
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador===mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonAgua = document.getElementById('boton-agua')
    botonFuego = document.getElementById('boton-fuego')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')
    
}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if(e.target.textContext==='🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            }else if(e.target.textContext==='💦'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            }else{
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            }
            ataqueAleatorioEnemigo()
        })
    })
    
}

function seleccionarMascotaEnemigo()
{
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo()
{
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)

    if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push('FUEGO')
    }else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push('AGUA')
    }else{
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
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