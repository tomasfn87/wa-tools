() => {
    let click_text = '{{Click Text}}'
    click_text = click_text.trim()
    let titulos = []
    const titulosHtml = document.querySelectorAll('footer > div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div h6')
    titulosHtml.forEach(t => titulos.push(t.innerText))
    const sobreAEmDiaHtml = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div a')).slice(0,5)
    let minhasDividasHtml
    if (navigator.userAgentData.mobile) {
        minhasDividasHtml = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div a')).slice(5,8)
    } else {
        minhasDividasHtml = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(2) > div a'))
    }
    let sobreAEmDia = []
    sobreAEmDiaHtml.forEach(i => {
        sobreAEmDia.push(i.innerText.trim())
    })
    let minhasDividas = []
    minhasDividasHtml.forEach(i => {
        minhasDividas.push(i.innerText.trim())
    })
    let acao = ''
    sobreAEmDia.forEach(text => {
        if (click_text == text) {
            acao += titulos[0]
        }
    })
    if (acao) {
        return acao
    }
    minhasDividas.forEach(text => {
        if (click_text == text) {
            acao += titulos[1]
        }
    })
    return acao
}

// Para testar no console do navegador:
/* (() => {
    let click_text = 'Em Oferta! '
    click_text = click_text.trim()
    titulos = []
    const titulosHtml = document.querySelectorAll('footer > div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div h6')
    titulosHtml.forEach(t => titulos.push(t.innerText))
    const sobreAEmDiaHtml = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div a')).slice(0,5)
    let minhasDividasHtml
    if (navigator.userAgentData.mobile) {
        minhasDividasHtml = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div a')).slice(5,8)
    } else {
        minhasDividasHtml = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(2) > div a'))
    }
    let sobreAEmDia = []
    sobreAEmDiaHtml.forEach(i => {
        sobreAEmDia.push(i.innerText.trim())
    })
    let minhasDividas = []
    minhasDividasHtml.forEach(i => {
        minhasDividas.push(i.innerText.trim())
    })
    let acao = ''
    sobreAEmDia.forEach(text => {
        if (click_text == text) {
            acao += titulos[0]
        }
    })
    if (acao) {
        console.log(`Ação: ${acao}`)
        return
    }
    minhasDividas.forEach(text => {
        if (click_text == text) {
            acao += titulos[1]
        }
    })
    console.log(`Ação: ${acao}`)
})() */

/*
(() => {
    if (!dataLayer) {let dataLayer = []}
    dataLayer.push({emDiaHome.titulos: []})
    dataLayer.push({emDiaHome.titulosHtml: document.querySelectorAll('footer > div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div h6'})
    dataLayer.titulosHtml.forEach(t => titulos.push(t.innerText))
    dataLayer.push({emDiaHome.sobreAEmDiaHtml: Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div a')).slice(0,5)})
    dataLayer.push({emDiaHome.minhasDividasHtml})
    if (navigator.userAgentData.mobile) {
        dataLayer.emDiaHome.minhasDividasHtml = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div a')).slice(5,8)
    } else {
        dataLayer.emDiaHome.minhasDividasHtml = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(2) > div a'))
    }
    dataLayer.push({sobreAEmDia: []})
    dataLayer.emDiaHome.sobreAEmDiaHtml.forEach(i => {
        dataLayer.emDiaHome.sobreAEmDia.push(i.innerText.trim())
    })
    let dataLayer.emDiaHome.minhasDividas = []
    dataLayer.emDiaHome.minhasDividasHtml.forEach(i => {
        dataLayer.emDiaHome.minhasDividas.push(i.innerText.trim())
    })
    let dataLayer.emDiaHome.acao = ''
    dataLayer.emDiaHome.sobreAEmDia.forEach(text => {
        if (dataLayer.emDiaHome.clickText == text) {
            dataLayer.emDiaHome.acao += dataLayer.emDiaHome.titulos[0]
        }
    })
    if (dataLayer.emDiaHome.acao) {
        console.log(`Ação: ${dataLayer.emDiaHome.acao}`)
        return
    }
    dataLayer.emDiaHome.minhasDividas.forEach(text => {
        if (dataLayer.emDiaHome.clickText == text) {
            dataLayer.emDiaHome.acao += dataLayer.emDiaHome.titulos[1]
        }
    })
    console.log(`Ação: ${dataLayer.emDiaHome.acao}`)
})()
*/