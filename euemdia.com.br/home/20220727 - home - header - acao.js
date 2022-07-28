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
    }
}