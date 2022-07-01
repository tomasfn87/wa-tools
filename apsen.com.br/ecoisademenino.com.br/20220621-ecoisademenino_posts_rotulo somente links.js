() => {
  let element = '{{Click Element}}'
  let rotulo = element.parentNode.querySelector('h3').innerText

  if (!rotulo) {
    rotulo = element.parentNode.parentNode.querySelector('h3').innerText
  }

  return rotulo
}