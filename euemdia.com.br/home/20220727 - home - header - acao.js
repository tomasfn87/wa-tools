() => {
    const e = '{{Click Element}}'
    if (e.matches('header nav > div:nth-child(1) > div > h1 > svg')) {
      return 'Logo' 
    } else if (e.matches('#root > div > div > div > header > div > div > nav > div:nth-of-type(2) span') || e.matches('header nav > div:nth-child(1) > div > h1 + div')) {
      return 'Botão'
    } else if (e.matches('header nav > div:nth-child(3) div > a > div:nth-of-type(1)')) {
      return 'Menu hambúrguer'
    } else if (e.matches('#root > div > div > div > header > div > div > nav > div > div > div > div > a > div:nth-of-type(1)')) {
      return 'Menu O que você precisa?'
    }
  }