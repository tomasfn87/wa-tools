const getOrderedSiblingTags = (tagElement, s='both') => {
    // Main object
    let orderedSiblings = {
        tag: tagElement, 
        siblings: {}
    }
    const sCheck = ['both', 'previous', 'next']
    if (!sCheck.includes(s)) {
        s = 'both'
    }
    // Previous siblings
    if (s=='both' || s=='previous') {
        orderedSiblings.siblings.previous = []
        currentTag = tagElement
        while (currentTag.previousElementSibling) {
            orderedSiblings.siblings.previous.unshift(currentTag.previousElementSibling)
            currentTag = currentTag.previousElementSibling
        }
    }
    // Next siblings
    if (s=='both' || s=='next') {
        orderedSiblings.siblings.next = []
        currentTag = tagElement
        while (currentTag.nextElementSibling) {
            orderedSiblings.siblings.next.push(currentTag.nextElementSibling)
            currentTag = currentTag.nextElementSibling
        }
    }
    if (s=='both') {
        // Adding Ordered siblings array to main object
        orderedSiblings.toArray = (() => {
            a = orderedSiblings.siblings.previous.slice()
            a.push(orderedSiblings.tag)
            return a.concat(orderedSiblings.siblings.next.slice())
        })
        // Adding tagElement position in the Ordered siblings array to main object
        orderedSiblings.tagPosition = (() => orderedSiblings.siblings.previous.length || 0)
    }
    return orderedSiblings
}

export default getOrderedSiblingTags
