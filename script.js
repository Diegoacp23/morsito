window.onload = () => lluviaEmojis();

function lluviaEmojis() {
  for (let i = 0; i < 40; i++) {
    let emoji = document.createElement('div');
    emoji.classList.add('emojis');
    emoji.innerHTML = ['🎉','💞','😍','🌹'][Math.floor(Math.random() * 4)];
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 6000);
  }
}

function abrirCarta() {
  document.getElementById('musicaFondo').pause();
  document.getElementById('musicaCarta').play();

  document.getElementById('contenidoCarta').style.display = 'block';
  document.getElementById('cartaBoton').style.display = 'none';

  document.getElementById('textoCarta').innerHTML = `
    <p>Eres lo más lindo que me pasó en la vida,</p>
    <p>Hoy celebramos nuestro tercer aniversario... y aún me parece increíble que la vida me haya regalado a alguien como tú. Cada instante contigo es un suspiro bonito, una canción suave, una chispa en mi alma.</p>
    <p>Gracias por tu risa, por tu ternura, por tus abrazos que me salvan cada día. Eres la mujer más hermosa que he conocido, por dentro y por fuera, y mi corazón late más fuerte cada vez que te pienso.</p>
    <p>En estos tres años hemos construido algo único, algo mágico. Y si me preguntas qué quiero para el futuro, solo te diría: más de nosotros. Más amaneceres contigo, más aventuras, más miradas cómplices.</p>
    <p>Te amo con todo lo que soy, y te extraño cuando no estás. Esta carta es solo una forma de recordártelo... pero mi amor por ti no cabe en palabras.</p>
    <p>Feliz aniversario, mi reina. Por muchos años más a tu lado.</p>
    <p><strong>Con todo mi cariño,<br>Tu baby el informático ❤️</strong></p>
  `;
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
    let brilli = document.createElement('div');
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
    let corazon = document.createElement('div');
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
  setTimeout(() => { mensaje.style.display = 'none'; }, 6000);
}
