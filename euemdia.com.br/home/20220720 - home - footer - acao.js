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


/* (() => {
    if (document.URL == 'https://euemdia.com.br/') {
        sessionStorage.setItem('homeClickText', ' Em Oferta! ')
        sessionStorage.homeClickText = sessionStorage.homeClickText.trim()
        titulos = []
        titulosHtml = document.querySelectorAll('footer > div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div h6')
        titulosHtml.forEach(t => titulos.push(t.innerText))
        sessionStorage.setItem('homeFooterTitulos', JSON.stringify(titulos))
        sobreAEmDiaHtml = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div a')).slice(0,5)
        if (navigator.userAgentData.mobile) {
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
        sessionStorage.setItem('homeFooterAcao', '')
        sobreAEmDia.forEach(text => {
            if (sessionStorage.homeClickText == text) {
                sessionStorage.homeFooterAcao = JSON.parse(sessionStorage.homeFooterTitulos)[0]
            }
        })
        if (sessionStorage.homeFooterAcao) {
            console.log(`Ação: ${sessionStorage.homeFooterAcao}`)
            return
        }
        minhasDividas.forEach(text => {
            if (sessionStorage.homeClickText == text) {
                sessionStorage.homeFooterAcao = JSON.parse(sessionStorage.homeFooterTitulos)[1]
            }
        })
    }
    console.log(`Ação: ${sessionStorage.homeFooterAcao}`)
})() */