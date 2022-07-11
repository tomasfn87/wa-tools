() => {
    let click_element = '{{Click Element}}'
    let rotulo = ''
    // Logos
    if (click_element.querySelector('img')) {
        rotulo += 'Logo - '
        if (click_element.querySelector('img').alt == 'Simulador de Locação CredPago') {
            rotulo += 'Simulador de Locação'
        } else if (click_element.querySelector('img').alt == 'Um produto CredPago') {
            rotulo += 'CredPago'
        }
    // NavBar
    } else {
        rotulo = click_element.innerText
    }
    return rotulo
}