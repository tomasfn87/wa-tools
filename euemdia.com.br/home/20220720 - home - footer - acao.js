() => {
    let click_text = '{{Click Text}}'
    click_text = click_text.trim()
    let acao = ''
    
    titulos = []
    titulosHtml = document.querySelectorAll('footer > div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div h6')
    titulosHtml.forEach(t => titulos.push(t.innerText))
    
    sobreAEmDia = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div a')).slice(0,5)
    
    const mobile = navigator.userAgentData.mobile
    if (mobile) {
        minhasDividas = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div a')).slice(5,8)
    } else {
        minhasDividas = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(2) > div a'))
    }
    
    sobreAEmDia = []
    sobreAEmDiaHtml.forEach(i => {
        sobreAEmDia.push(i.innerText.trim())
    })
    
    minhasDividas = []
    minhasDividasHtml.forEach(i => {
        minhasDividas.push(i.innerText.trim())
    })
    
    sobreAEmDia.forEach(label => {
        if (click_text == label) {
            acao += titulos[0]
        }
    })
    if (acao) {
        return acao
    }
    minhasDividas.forEach(label => {
        if (click_text == label) {
            acao += titulos[1]
        }
    })
    return acao
}

// Para testar no console do navegador

/* (() => {
    let click_text = 'Em Oferta! '
    click_text = click_text.trim()
    let acao = ''
    const mobile = navigator.userAgentData.mobile
    titulos = []
    titulosHtml = document.querySelectorAll('footer > div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div h6')
    titulosHtml.forEach(t => titulos.push(t.innerText))
    sobreAEmDiaHtml = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div a')).slice(0,5)
    if (mobile) {
        minhasDividasHtml = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div a')).slice(5,8)
    } else {
        minhasDividasHtml = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(2) > div a'))
    }
    sobreAEmDia = []
    sobreAEmDiaHtml.forEach(i => {
        sobreAEmDia.push(i.innerText.trim())
    })
    minhasDividas = []
    minhasDividasHtml.forEach(i => {
        minhasDividas.push(i.innerText.trim())
    })
    sobreAEmDia.forEach(label => {
        if (click_text == label) {
            acao += titulos[0]
        }
    })
    if (acao) {
        console.log(acao)
        return
    }
    minhasDividas.forEach(label => {
        if (click_text == label) {
            acao += titulos[1]
        }
    })
    console.log(acao)
})() */