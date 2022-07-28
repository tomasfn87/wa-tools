() => {
    const ce = '{{Click Element}}'
    if (ce.matches('{{[RCK] Home - Footer - Cliques de saída - Redes sociais (CSS)}}')) {
        return '{{Click URL}}'
    } else if (ce.matches('{{[RCK] Home - Footer - Links (CSS)}}')) {
        return '{{Click Text}}'
    }
}