() => {
    let click_text = '{{Click Text}}'
    click_text = click_text.trim().toLowerCase()
    let titulos = []
    const titulosHtml = document.querySelectorAll('footer > div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div h6')
    titulosHtml.forEach(t => titulos.push(t.innerText))
    const sobreAEmDiaHtml = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div a')).slice(0,5)
    const minhasDividasHtml1 = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div a')).slice(5,8)
    const minhasDividasHtml2 = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(2) > div a'))    
    let sobreAEmDia = []
    sobreAEmDiaHtml.forEach(i => {
        sobreAEmDia.push(i.innerText.trim().toLowerCase())
    })
    let minhasDividas = []
    minhasDividasHtml1.forEach(i => {
        minhasDividas.push(i.innerText.trim().toLowerCase())
    })
    minhasDividasHtml2.forEach(i => {
        if (!minhasDividas.includes(i.innerText.trim().toLowerCase())) {
            minhasDividas.push(i.innerText.trim().toLowerCase())
        }
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

/* const homeFooterAcao = (click_text) => {
    if (/https:\/\/euemdia\.com\.br\//.test(document.URL)) {
        sessionStorage.setItem('homeClickText', click_text)
        sessionStorage.homeClickText = sessionStorage.homeClickText.trim().toLowerCase()
        let titulos = []
        const titulosHtml = document.querySelectorAll('footer > div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div h6')
        titulosHtml.forEach(t => titulos.push(t.innerText))
        sessionStorage.setItem('homeFooterTitulos', JSON.stringify(titulos))
        const sobreAEmDiaHtml = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div a')).slice(0,5)
        const minhasDividasHtml1 = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(1) > div a')).slice(5,8)
        const minhasDividasHtml2 = Array.from(document.querySelectorAll('footer div.MuiContainer-root.MuiContainer-maxWidthLg > div > div:nth-child(2) > div:nth-child(2) > div a'))
        let sobreAEmDia = []
        sobreAEmDiaHtml.forEach(i => {
            sobreAEmDia.push(i.innerText.trim().toLowerCase())
        })
        let minhasDividas = []
        minhasDividasHtml1.forEach(i => {
            minhasDividas.push(i.innerText.trim().toLowerCase())
        })
        minhasDividasHtml2.forEach(i => {
            if (!minhasDividas.includes(i.innerText.trim().toLowerCase())) {
                minhasDividas.push(i.innerText.trim().toLowerCase())
            }
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
        console.log(`Ação: ${sessionStorage.homeFooterAcao}`)
    }
} */

/* (() => {
    links_footer = document.querySelectorAll('#emDia-footer > div > div > div:nth-of-type(2) a')
    links_footer.forEach(i => i.addEventListener('click', e => { homeFooterAcao(e.target.innerText) }))
})() /*
