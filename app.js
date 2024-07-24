let numeroSecreto = 0;
let intento = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function valorUsuario() {
  let numeroUsuario = parseInt(document.getElementById(`valorIntento`).value);

  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento(
      `p`,
      `Acertaste el numero en ${intento}  ${intento === 1 ? `vez` : `veces`}`
    );
    document.getElementById(`reiniciar`).removeAttribute(`disabled`);
  } //if1
  else {
    if (numeroUsuario > numeroSecreto) {
      asignarTextoElemento(`p`, `El numro es menor`);
    } //if2
    else {
      if (numeroUsuario < numeroSecreto) {
        asignarTextoElemento(`p`, `El numero es mayor`);
      } //if3
    } //else2
    intento++;
    limpiarCaja();
  } //else1
}

function generarNumeroSecreto() {
  let NumeroGenerado;
  console.log(NumeroGenerado);
  console.log(listaNumerosSorteados);
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento(`p`, `Jugaste cantidad maxima de intentos.Gracias!`);
  } else {
    do {
      NumeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    } while (listaNumerosSorteados.includes(NumeroGenerado));

    listaNumerosSorteados.push(NumeroGenerado);
    return NumeroGenerado;
  }
}

function limpiarCaja() {
  document.getElementById(`valorIntento`).value = ``;
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "juego secreto");
  asignarTextoElemento("p", `Elija de 1 a ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intento = 1;
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //indicar mensaje de intervalo de numeros

  asignarTextoElemento("p", `Elija de 1 a ${numeroMaximo}`);
  //generar nemero aleatorio
  //desabilitar boton
  //iniciar elcontador
  //volver texto inicial

  condicionesIniciales();
}

condicionesIniciales();
document.querySelector("#reiniciar").setAttribute("disabled", "true");
condicionesIniciales();
