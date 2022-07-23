// https://raw.githubusercontent.com/tomasfn87/wa-tools/main/findPreviousOrNextTag/20220723%20-%20get%20Ordered%20Sibling%20Tags.js
// https://raw.githubusercontent.com/tomasfn87/wa-tools/main/findPreviousOrNextTag/20220723%20-%20find%20Previous%20or%20Next%20Tag.js

// Casos de teste
test1 = document.querySelector('#emDia-footer > div > div > div > div:nth-child(1) > div > div:nth-of-type(1)')
test2 = document.querySelector('#emDia-footer > div > div > div > div:nth-child(1) > div > div:nth-of-type(2)')
test3 = document.querySelector('#emDia-footer > div > div > div > div:nth-child(2) > div > div:nth-child(1)')
test4 = document.querySelector('#emDia-footer > div > div > div > div:nth-child(1) > div > div:nth-child(5)')

// Primeiro caso
findFirstPreviousTag(test1, 'h6', 0)
// é o mesmo que
findFirstPreviousSiblingTag(test1, 'h6')

// Demais casos
findFirstPreviousTag(test2, 'h6', 0)
findFirstPreviousTag(test3, 'h6', 0)
findFirstPreviousTag(test4, 'h6', 0)

// Click Text event listener
setTimeout(
    (() => {
        let links_footer = document.querySelectorAll('#emDia-footer > div > div > div:nth-of-type(2) a')
        const tagName = 'H6'
        const levelsUp = 2
        let nivel = 'nível'
            if (levelsUp > 1) {
                nivel = nivel.slice(0,4)+'is'
            }
        links_footer.forEach(i => i.addEventListener('click', e => {
            console.log(`Click Text: ${e.target.innerText},\nprimeira <${tagName.toLowerCase()}>, ${levelsUp > 0 ? 'máx. '
            +levelsUp.toString()+' '+nivel+' acima:' : 'somente tags irmãs:'} ${findFirstPreviousTag(e.target, tagName, levelsUp).innerText}`)
        }))
    })
, 7000)