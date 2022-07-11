() => {
    const click_text = '{{Click Text}}'
    let acao
    inquilino_h4 = document.querySelectorAll('#gatsby-focus-wrapper > div > main > div:nth-child(4) > div:nth-child(3) > div > div:nth-child(1) > div h4')
    inquilino = []
    inquilino_h4.forEach(i => inquilino.push(i.innerText))
    imobiliaria_h4 = document.querySelectorAll('#gatsby-focus-wrapper > div > main > div:nth-child(4) > div:nth-child(3) > div > div:nth-child(2) > div h4')
    imobiliaria = []
    imobiliaria_h4.forEach(i => imobiliaria.push(i.innerText))
    inquilino.forEach((frase) => {
        if (frase == click_text) {
            acao = 'Inquilino'
        }
    })
    if (acao) {
        return acao
    }
    imobiliaria.forEach((frase) => {
        if (frase == click_text) {
            acao = 'Imobiliária/Corretor'
        }
    })
    return acao
}
