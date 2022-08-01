() => {
    const ce = '{{Click Element}}'
    if (ce.matches('{{[RCK] Home - Header - Logo emDia (CSS)}}')) {
        return 'Logo' 
    } else if (ce.matches('{{[RCK] Home - Header - Botão Entrar (desktop) (CSS)}}') 
        || ce.matches('{{[RCK] Home - Header - Botão 2a via de boleto (mobile) (CSS)}}')) {
        return 'Botão'
    } else if (ce.matches('{{[RCK] Home - Header - Menu hambúrguer (mobile) (CSS)}}')) {
        return 'Menu hambúrguer'
    } else if (ce.matches('{{[RCK] Home - Header - Menu O que você precisa? (desktop) (CSS)}}')) {
        return 'Menu O que você precisa?'
    } else if (ce.matches('{{[RCK] Home (login) - Header - Menu Minhas Dívidas (desktop) (CSS)}}')) {
        return 'Menu Minhas Dívidas'
    } else if (ce.matches('{{[RCK] Home (login) - Header - Menu usuário (CSS)}}')
        || ce.matches('{{[RCK] Home (login) - Header - Menu usuário - Ícone Sair (CSS)}}')) {
        return 'Menu usuário'
    }
}