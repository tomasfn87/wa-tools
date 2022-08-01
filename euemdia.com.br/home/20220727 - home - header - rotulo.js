() => {
    const ce = '{{Click Element}}'
    if (ce.matches('{{[RCK] Home - Header - Logo emDia (CSS)}}')) {
        return 'emDia'
    } else if (ce.matches('{{[RCK] Home (login) - Header - Menu usuário - Ícone Sair (CSS)}}')) {
        return 'SAIR'
    }
    else {
        return '{{Click Text}}'
    }
}
