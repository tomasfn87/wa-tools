() => {
  let rotulo
  let element = '{{Click Element}}'

  // Imagem ou Texto
  if (element.className == 'img-fluid img-principal' 
      || element.parentNode.className == 'wrap-content-init' && element.localName == 'p') {
    rotulo = element.parentNode.parentNode.querySelector('h3').innerText
  // Título
  } else if (element.localName == 'h3') {
    rotulo = element.innerText
  // Botão
  } else if (element.innerText.match(/leia\smais/i)) {
    rotulo = element.parentNode.querySelector('h3').innerText
  }

  return rotulo
}