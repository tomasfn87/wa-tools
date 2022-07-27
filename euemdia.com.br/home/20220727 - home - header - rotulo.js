function () {
    const click_element = '{{Click Element}}';
    if (click_element.matches('header nav > div:nth-child(1) > div > h1 > svg')) {
      return 'emDia'
    } else {
      return '{{Click Text}}'
    }
  }