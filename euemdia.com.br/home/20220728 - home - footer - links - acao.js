() => {
    const ce = '{{Click Element}}';
    const findFirstPreviousTag = (tagElement, tagName, levelsUp) => {
        if (!findFirstPreviousSiblingTag(tagElement, tagName)) {
            c = 0
            while (c <= levelsUp && tagElement.parentNode) {
                if (findFirstPreviousSiblingTag(tagElement, tagName)) {
                    return findFirstPreviousSiblingTag(tagElement, tagName)
                }
                tagElement = tagElement.parentNode
                c++
            }
        } else {
            return findFirstPreviousSiblingTag(tagElement, tagName)
        }
    }
    const findFirstPreviousSiblingTag = (tagElement, tagName) => {
        let s = getOrderedSiblingTags(tagElement, 'previous')
        if (s.siblings.previous) {
            for (let tag of s.siblings.previous.reverse()) {
                if (tag.tagName.toLowerCase() == tagName.toLowerCase()) {
                    return tag
                }
            }
        }
    }
    const getOrderedSiblingTags = (tagElement, s='both') => {
        // Main object
        let orderedSiblings = {
            tag: tagElement, 
            siblings: {}
        }
        const sCheck = ['both', 'previous']
        if (!sCheck.includes(s)) {
            s = 'both'
        }
        // Previous siblings
        if ((s=='both' || s=='previous') && tagElement.previousElementSibling) {
            orderedSiblings.siblings.previous = []
            currentTag = tagElement
            while (currentTag.previousElementSibling) {
                orderedSiblings.siblings.previous.unshift(currentTag.previousElementSibling)
                currentTag = currentTag.previousElementSibling
            }
        }
        return orderedSiblings
    }
    return findFirstPreviousTag(ce, 'h6', 2).innerText;
}