() => {
    let click_element = '{{Click Element}}'
    let logos = document.querySelectorAll('header ul.style__LogosWrapper-qsk0em-1.fPZDmz li a img')
    let logos_alt_text = []
    logos.forEach((logo) => {
        logos_alt_text.push(logo.alt)
    })
    let rotulo = ''
    // Logos
    if (click_element.querySelector('img')) {
        rotulo += 'Logo - '
        if (click_element.querySelector('img').alt == logos_alt_text[0]) {
            rotulo += click_element.querySelector('img').alt.split(' CredPago')[0]
        } else if (click_element.querySelector('img').alt == logos_alt_text[1]) {
            rotulo += click_element.querySelector('img').alt.split('Um produto ')[1]
        }
    // NavBar
    } else {
        rotulo = click_element.innerText
    }
    return rotulo
}