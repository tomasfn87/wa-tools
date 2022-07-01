() => {
    const capitalize = (text) => {
        if (!text) {
            return ''
        }
        if (text.length > 1) {
            return text[0].toUpperCase() + text.slice(1, text.length).toLowerCase();
        }
        else {
            return text.toUpperCase()
        }
    }
    click_text = '{{Click Text}}'
    if (click_text.toLowerCase() == 'faq') {
        return click_text
    }
    return capitalize(click_text)
}

// const capitalize = (text) => {
//   if (!text) {
//       return ''
//   }
//   if (text.length > 1) {
//       return text[0].toUpperCase() + text.slice(1, text.length).toLowerCase();
//   }
//   else {
//       return text.toUpperCase()
//   }
// }

// console.log(capitalize(a))
// console.log(capitalize(b))
// console.log(capitalize(c))