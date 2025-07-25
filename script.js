function abrirCarta() {
  document.getElementById('cartaImg').src = 'img/fotoCarta.jpg'; // nueva imagen
  document.getElementById('musicaFondo').pause();
  document.getElementById('musicaCarta').play();
  crearBrillitosConCorazones();
}

function cerrarCarta() {
  document.getElementById('cartaImg').src = 'img/imagenInicial.jpg'; // volver a foto inicial
  document.getElementById('musicaCarta').pause();
  document.getElementById('musicaFondo').play();
  crearBrillitosConCorazones();
  mostrarMensajeFinal();
}

function crearBrillitosConCorazones() {
  for (let i = 0; i < 30; i++) {
    let corazon = document.createElement('div');
    corazon.classList.add('corazon');
    corazon.innerHTML = '💖';
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(corazon);
    setTimeout(() => corazon.remove(), 6000);
  }
}

function mostrarMensajeFinal() {
  const mensaje = document.getElementById('mensajeFinal');
  mensaje.style.display = 'block';
  setTimeout(() => { mensaje.style.display = 'none'; }, 5000);
}
