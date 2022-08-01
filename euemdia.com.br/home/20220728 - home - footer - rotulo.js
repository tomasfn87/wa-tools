() => {
    const ce = '{{Click Element}}'
    if (ce.matches('{{[RCK] Home - Footer - Cliques de saída - Redes sociais (CSS)}}')) {
        return '{{Click URL}}'
    } else if (ce.matches('{{[RCK] Home - Footer - Políticas e segurança / Procon (CSS)}}')) {
        return '{{[RCK] Home - Footer - Políticas e segurança / Procon - Rótulo}}'
    } else {
        return '{{Click Text}}'
    }
}