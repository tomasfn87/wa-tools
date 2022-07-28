() => {
    const click_element = '{{Click Element}}'
    const cssLogoEmDia = 'header nav > div:nth-child(1) > div > h1 > svg'
    const cssBotaoEntrar = '#root > div > div > div > header > div > div > nav > div:nth-of-type(2) span'
    const cssBotao2aViaDeBoleto = 'header nav > div:nth-child(1) > div > h1 + div'
    const cssMenuHamburguer = 'header nav > div:nth-child(3) div > a > div:nth-of-type(1)'
    const cssMenuOQueVocePrecisa = '#root > div > div > div > header > div > div > nav > div > div > div > div > a > div:nth-of-type(1)'
    if (click_element.matches(cssLogoEmDia)) {
        return 'Logo' 
    } else if (click_element.matches(cssBotaoEntrar) || click_element.matches(cssBotao2aViaDeBoleto)) {
        return 'Botão'
    } else if (click_element.matches(cssMenuHamburguer)) {
        return 'Menu hambúrguer'
    } else if (click_element.matches(cssMenuOQueVocePrecisa)) {
        return 'Menu O que você precisa?'
    }
}