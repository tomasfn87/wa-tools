() => {
    let acao
    let element = '{{Click Element}}'

    if (element.className == 'img-fluid img-principal') {
      acao = 'Imagem';
    } else if (element.localName == 'h3') {
      acao = 'Título';
    } else if (element.parentNode.className == 'wrap-content-init' && element.localName == 'p') {
      acao = 'Texto';
    } else if (element.innerText == 'Leia mais' || element.innerHTML == 'Leia mais') {
      acao = 'Botão';
    }

    return acao
  }