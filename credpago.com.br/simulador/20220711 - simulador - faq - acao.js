() => {
    const click_text = '{{Click Text}}'
    let acao
    const inquilino_h4 = document.querySelectorAll('main > div:nth-child(4) > div:nth-child(3) > div > div:nth-child(1) > div h4')
    let inquilino = []
    inquilino_h4.forEach(i => inquilino.push(i.innerText))
    const imobiliaria_h4 = document.querySelectorAll('main > div:nth-child(4) > div:nth-child(3) > div > div:nth-child(2) > div h4')
    let imobiliaria = []
    imobiliaria_h4.forEach(i => imobiliaria.push(i.innerText))
    const faq_tipos = document.querySelectorAll('#faq li')
    let faq_rotulos = []
    faq_tipos.forEach((tipo) => {
        faq_rotulos.push(tipo.innerText)
    })
    inquilino.forEach((frase) => {
        if (frase == click_text) {
            acao = faq_rotulos[0].split(' ')[1]
        }
    })
    if (acao) {
        return acao
    }
    imobiliaria.forEach((frase) => {
        if (frase == click_text) {
            acao = faq_rotulos[1].split(' ')[1]
        }
    })
    return acao
}
