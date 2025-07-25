window.addEventListener('DOMContentLoaded', () => {
  // Sugerencia: muestra botón para activar música de fondo manualmente
  const fondo = document.getElementById('musicaFondo');
  const activarBtn = document.createElement('button');
  activarBtn.textContent = '🎶 Activar música de fondo';
  activarBtn.classList.add('botonMusica');
  activarBtn.onclick = () => {
    fondo.currentTime = 0;
    fondo.play().catch(() => {
      alert('No se pudo reproducir la música. Intenta tocar nuevamente.');
    });
    activarBtn.remove(); // elimina el botón una vez activado
  };
  document.body.appendChild(activarBtn);
});

window.onload = () => lluviaEmojis();

function lluviaEmojis() {
  for (let i = 0; i < 40; i++) {
    const emoji = document.createElement('div');
    emoji.classList.add('emojis');
    emoji.innerHTML = ['🎉', '💞', '😍', '🌹', '💟', '🌻', '💋', '💌'][Math.floor(Math.random() * 8)];
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 6000);
  }
}

function abrirCarta() {
  const fondo = document.getElementById('musicaFondo');
  const carta = document.getElementById('musicaCarta');

  // Fade-out suave del fondo
  let volumen = fondo.volume;
  const fadeOut = setInterval(() => {
    volumen -= 0.05;
    fondo.volume = Math.max(volumen, 0);
    if (volumen <= 0) {
      clearInterval(fadeOut);
      fondo.pause();
    }
  }, 100);

  carta.currentTime = 0;
  carta.play().catch(() => {
    alert('No se pudo reproducir la música de la carta.');
  });

  document.getElementById('imagenInicio').style.display = 'none';
  document.getElementById('contenidoCarta').style.display = 'block';
  document.getElementById('cartaBoton').style.display = 'none';

  // Máquina de escribir
  const textoCarta = document.getElementById('textoCarta');
  const mensaje = `Eres lo más lindo que me pasó en la vida...

Hoy celebramos nuestro tercer aniversario... y aún me parece increíble que la vida me haya regalado a alguien como tú.

Cada instante contigo es un suspiro bonito, una canción suave, una chispa en mi alma.

Gracias por tu risa, por tu ternura, por tus abrazos que me salvan cada día.

En estos tres años hemos construido algo único, algo mágico.

Te amo con todo lo que soy, y te extraño cuando no estás.

Feliz aniversario, mi reina. Por muchos años más a tu lado.

Con todo mi cariño,
Tu baby el informático ❤️`;

  let i = 0;
  textoCarta.innerHTML = '';
  (function escribir() {
    if (i < mensaje.length) {
      textoCarta.innerHTML += mensaje[i] === '\n' ? '<br>' : mensaje[i];
      i++;
      setTimeout(escribir, 40);
    }
  })();
}


function cerrarCarta() {
  document.getElementById('contenidoCarta').style.display = 'none';
  document.getElementById('cartaBoton').style.display = 'block';

  document.getElementById('musicaCarta').pause();
  document.getElementById('musicaFondo').play();

  lluviaCorazones();
  mostrarMensajeFinal();
}

function lluviaBrillitos() {
  for (let i = 0; i < 30; i++) {
    const brilli = document.createElement('div');
    brilli.classList.add('brillitos');
    brilli.innerHTML = '✨';
    brilli.style.left = Math.random() * 100 + 'vw';
    brilli.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(brilli);
    setTimeout(() => brilli.remove(), 6000);
  }
}

function lluviaCorazones() {
  for (let i = 0; i < 30; i++) {
    const corazon = document.createElement('div');
    corazon.classList.add('corazones');
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
  setTimeout(() => {
    mensaje.style.display = 'none';
  }, 6000);
}
function iniciarMusicaFondo() {
  const fondo = document.getElementById('musicaFondo');
  fondo.currentTime = 0;
  fondo.play().catch(() => {
    alert("Tu navegador bloqueó la reproducción automática. Toca de nuevo para activar la música.");
  });
}
function corazonesFlotantes() {
  setInterval(() => {
    const corazon = document.createElement('div');
    corazon.classList.add('corazonFlotante');
    corazon.innerHTML = '💖';
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.fontSize = Math.random() * 24 + 16 + 'px';
    corazon.style.animationDuration = (Math.random() * 5 + 5) + 's';
    document.body.appendChild(corazon);
    setTimeout(() => corazon.remove(), 10000);
  }, 500); // cada medio segundo
}

window.onload = () => {
  lluviaEmojis();
  corazonesFlotantes(); // activar corazones flotantes
};


