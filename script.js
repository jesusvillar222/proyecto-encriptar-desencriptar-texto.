const textoInput = document.getElementById('texto');
const resultadoOutput = document.getElementById('resultado');
const encriptarButton = document.getElementById('encriptar');
const desencriptarButton = document.getElementById('desencriptar');

encriptarButton.addEventListener('click', () => {
  const texto = textoInput.value;
  const textoEncriptado = encriptar(texto);
  resultadoOutput.value = textoEncriptado;
});

desencriptarButton.addEventListener('click', () => {
  const texto = textoInput.value;
  const textoDesencriptado = desencriptar(texto);
  resultadoOutput.value = textoDesencriptado;
});

function encriptar(texto) {
  let textoEncriptado = '';
  for (let i = 0; i < texto.length; i++) {
    const caracter = texto.charAt(i);
    if (caracter.match(/[a-z]/i)) {
      const codigo = caracter.charCodeAt(0);
      const codigoEncriptado = codigo + 3;
      if (codigoEncriptado > 122) {
        codigoEncriptado -= 26;
      }
      textoEncriptado += String.fromCharCode(codigoEncriptado);
    } else {
      textoEncriptado += caracter;
    }
  }
  return textoEncriptado;
}

function desencriptar(texto) {
  let textoDesencriptado = '';
  for (let i = 0; i < texto.length; i++) {
    const caracter = texto.charAt(i);
    if (caracter.match(/[a-z]/i)) {
      const codigo = caracter.charCodeAt(0);
      const codigoDesencriptado = codigo - 3;
      if (codigoDesencriptado < 97) {
        codigoDesencriptado += 26;
      }
      textoDesencriptado += String.fromCharCode(codigoDesencriptado);
    } else {
      textoDesencriptado += caracter;
    }
  }
  return textoDesencriptado;
}