() => {
    const ce = '{{Click Element}}'
    if (ce.matches('{{[RCK] Home - Footer - Cliques de saída - Redes sociais (CSS)}}')) {
        return 'Cliques de saída - Redes Sociais'
    } else if (ce.matches('{{[RCK] Home - Footer - Links (CSS)}}')) {
        return 'Clique - '+'{{[RCK] Home - Footer - Links - Ação}}'
    } else if (ce.matches('{{[RCK] Home - Footer - Políticas e segurança / Procon (CSS)}}')) {
        return 'Clique'
    }
}