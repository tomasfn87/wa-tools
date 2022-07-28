() => {
    const click_element = '{{Click Element}}'
    const cssLogoEmDia = 'header nav > div:nth-child(1) > div > h1 > svg'
    if (click_element.matches(cssLogoEmDia)) {
        return 'emDia'
    } else {
        return '{{Click Text}}'
    }
}
