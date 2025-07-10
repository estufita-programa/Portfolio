var background = document.getElementById('proyectos');

function activar(proyecto, elemento) {
  // Cambiar el fondo según el proyecto
  switch(proyecto) {
    case 'capitalis':
      background.style.background = "linear-gradient(90deg, hsla(138, 20%, 38%, 1) 0%, hsla(152, 65%, 53%, 1) 26%, hsla(152, 77%, 56%, 1) 43%, hsla(117, 54%, 72%, 1) 76%, hsla(144, 69%, 63%, 1) 93%)";
      break;
    case 'hcs':
      background.style.background = "linear-gradient(90deg, hsla(334, 59%, 34%, 1) 0%, hsla(337, 93%, 45%, 1) 22%, hsla(333, 80%, 60%, 1) 45%, hsla(334, 100%, 72%, 1) 100%)";
      break;
    case 'lya':
      background.style.background = "linear-gradient(90deg, hsla(70, 17%, 34%, 1) 0%, hsla(59, 42%, 68%, 1) 22%, hsla(27, 38%, 94%, 1) 52%, hsla(44, 41%, 89%, 1) 100%)";
      break;
  }

  document.querySelectorAll('.mas-text').forEach(span => {
    span.textContent = '+';
    span.classList.remove('rotar');
  });
  document.querySelectorAll('.pharagraph').forEach(p => {
    p.classList.remove('pharagraph-open');
  });
  document.querySelectorAll('.imagen').forEach(img => {
   img.classList.remove('imagen-open');
  });

  // Obtener el ícono actual clickeado
  const icono = elemento.querySelector('.mas-text');
  icono.classList.add('rotar');

  // Mostrar el que corresponde al proyecto activo
  const parrafo = document.querySelector(`.pharagraph[data-proyecto="${proyecto}"]`);
  if (parrafo) {
    parrafo.classList.add('pharagraph-open');
  }
  // Mostrar solo la del proyecto actual
  const imagen = document.querySelector(`.imagen[data-proyecto="${proyecto}"]`);
  if (imagen) {
    imagen.classList.add('imagen-open');
  }
}
