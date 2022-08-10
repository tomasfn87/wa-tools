const remove_function_expression = (string, loud=false) => {
    const regexFE = /^\s*\((\s*function\s*\(\s*\)\s*\{.*\}\s*)\);?\s*/sg
    const regexIIFE = /^\s*\((\s*function\s*\(\s*\)\s*\{.*\}\s*)\)\s*(\(\s*\))\s*?\s*/sg
    if (regexIIFE.test(string)) {
        return string
    } else if (regexFE.test(string)) {
        const result = string.replace(regexFE, "$1")
        const display_match = string.replace(result, '')
        loud && console.log('\n - Removendo function expression (FE):\n' + '(,)')
        return result
    }
    return string
}

export default remove_function_expression
