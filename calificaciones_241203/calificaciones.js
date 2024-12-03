document.getElementById('evaluar-btn').addEventListener('click', function() {
  const notaInput = document.getElementById('nota').value.trim();
  const resultadoOutput = document.getElementById('resultado');

  // Verificar si la entrada es válida
  if (!/^\d+$/.test(notaInput) || notaInput < 0 || notaInput > 10) {
    alert('Nota no válida. Por favor, introduce un número entre 0 y 10.');
    resultadoOutput.value = '';
    return;
  }

  // Evaluar la nota
  const nota = parseInt(notaInput, 10);
  let resultado;

  if (nota < 5) {
    resultado = 'Insuficiente';
  } else if (nota < 6) {
    resultado = 'Suficiente';
  } else if (nota < 7) {
    resultado = 'Bien';
  } else if (nota < 9) {
    resultado = 'Notable';
  } else {
    resultado = 'Sobresaliente';
  }

  resultadoOutput.value = resultado;
});