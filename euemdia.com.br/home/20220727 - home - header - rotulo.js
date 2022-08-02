() => {
    const ce = '{{Click Element}}'
    if (ce.matches('{{[RCK] Home - Header - Logo emDia (CSS)}}')) {
        return 'emDia'
    } else if (ce.matches('{{[RCK] Home (login) - Header - Menu usuário (desktop) - Ícone Sair (CSS)}}')
        || ce.matches('{{[RCK] Home (login) - Menu hambúrguer (mobile) - Ícone Sair (CSS)}}')) {
        return 'SAIR'
    }
    else {
        return '{{Click Text}}'
    }
}
