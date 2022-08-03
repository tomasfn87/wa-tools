() => {
    let cpfInvalido
    setTimeout(
        cpfInvalido = document.querySelector('#home-form-cpf > div')        
    , 1000)
    return !!cpfInvalido
}