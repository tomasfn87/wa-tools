() => {
    const ce = '{{Click Element}}'
    return ce.parentElement.parentElement.innerText.split('\n')[0].trim()
}